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
      missingLetters: true,
      extraLetters: true,
    },
  },
  BROWSER: {
    headless: true,
    maxTimeout: 10000,
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36',
    viewport: {
      width: 1000,
      height: 1000,
    },
  },
  coloredConsoleLogs: true,
  usePreciseTime: false,
  estimatedTimePreciseness: 10,
};

const scamWebsites = generate(
  CONFIG.LINK_GENERATOR.BASE_WEBSITES,
  CONFIG.LINK_GENERATOR
);

const alert = (message: String, code?: Number) => {
  if (CONFIG.coloredConsoleLogs) {
    if (code === undefined) console.log(`[!] ${message}`);
    if (code === 0) console.log(`\x1b[32;49;1m[SUCCESS]\x1b[0m ${message}`);
    if (code === 1) console.log(`\x1b[31;49;1m[ERR]\x1b[0m ${message}`);
  } else {
    if (code === undefined) console.log(`[!] ${message}`);
    if (code === 0) console.log(`[SUCCESS] ${message}`);
    if (code === 1) console.log(`[ERR] ${message}`);
  }
};

const findElapsed = (start: number, end: number) => {
  if (CONFIG.usePreciseTime) return end - start;
  return parseInt((end - start).toString().split('.')[0]);
};

const pushMax = (array: Array<any>, max: number, item: any) => {
  if (array.length === max) {
    array.shift();
    array.push(item);
    return array;
  } else {
    array.push(item);
    return array;
  }
};

const averageArray = (history: Array<number>) => {
  let timeLeft = 0;
  for (let i = 0; i < history.length; i++) {
    timeLeft += history[i];
  }
  return timeLeft / history.length;
};

(async () => {
  const browser = await puppeteer.launch({
    headless: CONFIG.BROWSER.headless,
    ignoreHTTPSErrors: true,
    args: ['--disable-web-security'],
  });
  const page = await browser.newPage();
  await page.setUserAgent(CONFIG.BROWSER.userAgent);
  await page.setViewport({
    width: CONFIG.BROWSER.viewport.width,
    height: CONFIG.BROWSER.viewport.height,
  });
  let totalStart = performance.now();
  let timeHistory = new Array<number>();
  for (let i = 0; i < scamWebsites.length; i++) {
    let start = performance.now();
    let end = 0;
    let sitesLeft = scamWebsites.length - i;
    try {
      await page.goto(`https://www.${scamWebsites[i]}`);
      await page.waitForNetworkIdle({ timeout: CONFIG.BROWSER.maxTimeout });
    } catch (err) {
      end = performance.now();
      alert(`${err} in ${findElapsed(start, end)} ms`, 1);
      continue;
    }
    await page.screenshot({
      path: path.join(__dirname, `images/${scamWebsites[i]}.png`),
    });
    end = performance.now();
    pushMax(
      timeHistory,
      CONFIG.estimatedTimePreciseness,
      findElapsed(start, end)
    ); // This is the only place timeHistory is updated. Updating on errors will either add too short or too long values
    // realistically this doesn't matter because estimated time is proportional to the amount of sites left which IS affected by errors
    alert(`${scamWebsites[i]} done in ${findElapsed(start, end)} ms`, 0);
    alert(
      `${scamWebsites.length - i} more websites - estimated ${
        CONFIG.coloredConsoleLogs ? '\x1b[30;47;1;3m' : '\x1b[0m'
      }${averageArray(timeHistory) * scamWebsites.length} ms\x1b[0m left`
    );
  }
  await browser.close();
  let totalEnd = performance.now();
  alert(`Done in ${findElapsed(totalStart, totalEnd)}\x1b[0m ms`);
})();
