import { generate } from './modules/LinkGenerator';
import puppeteer from 'puppeteer';
import path from 'path';

const CONFIG = {
  LINK_GENERATOR: {
    BASE_WEBSITES: [
      'youtube.com',
      'facebook.com',
      'gmail.com',
      'twitter.com',
      'reddit.com',
      'instagram.com',
    ],
    MODIFIERS: {
      missingLetters: false,
      extraLetters: false,
    },
  },
  BROWSER: {
    headless: true,
    maxTimeout: 10000,
  },
};

const scamWebsites = generate(
  CONFIG.LINK_GENERATOR.BASE_WEBSITES,
  CONFIG.LINK_GENERATOR
);

console.log(scamWebsites);

(async () => {
  const browser = await puppeteer.launch({
    headless: CONFIG.BROWSER.headless,
    ignoreHTTPSErrors: true,
    args: ['--disable-web-security'],
  });
  const page = await browser.newPage();
  for (let i = 0; i < scamWebsites.length; i++) {
    try {
      await page.goto(`https://www.${scamWebsites[i]}`);
      await page.waitForNetworkIdle({ timeout: CONFIG.BROWSER.maxTimeout });
    } catch (err) {
      console.log(`[ERR] ${scamWebsites[i]} failed to load. ${err}`);
      continue;
    }
    console.log(`[SUCCESS] ${scamWebsites[i]} loaded.`);
    await page.screenshot({
      path: path.join(__dirname, `images/test${i}.png`),
    });
  }
})();
