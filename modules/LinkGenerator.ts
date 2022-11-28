// This module generates common links used for scam popup sites

interface Settings {
  MODIFIERS: Modifiers;
}
interface Modifiers {
  missingLetters: Boolean;
  extraLetters: Boolean;
}

export const generate = (base: Array<String>, settings: Settings) => {
  let output = new Array<String>();
  let mods = settings.MODIFIERS;
  for (let i = 0; i < base.length; i++) {
    let link = base[i];
    output = [
      ...output,
      ...(mods.missingLetters ? missingLetters(link) : []),
      ...(mods.extraLetters ? extraLetters(link) : []),
      ...commonScamLinks(), // Common Scam Links is always enabled.
    ];
  }
  return [...new Set(output)];
};

/* 
Below are modifier functions.
They should handle removing + readding the TLD
They should also handle enabled/disabled
*/

const missingLetters = (base: String) => {
  let links: Array<String> = [];
  let link = base.split('.')[0];
  let suffix = base.split('.')[1];
  for (let i = 0; i < link.length; i++) {
    links.push(`${link.slice(0, i)}${link.slice(i + 1)}.${suffix}`);
  }
  return links;
};
const extraLetters = (base: String) => {
  let links: Array<String> = [];
  let link = base.split('.')[0];
  let suffix = base.split('.')[1];
  for (let i = 0; i < link.length; i++) {
    links.push(`${link.slice(0, i)}${link[i]}${link.slice(i)}.${suffix}`);
  }
  return links;
};
const commonScamLinks = () => {
  let links = [
    'geogle.com',
    'ggmail.com',
    'ghogle.com',
    'gmial.com',
    'goggle.com',
    'goigle.com',
    'googae.com',
    'googe.com',
    'googee.com',
    'googfe.com',
    'googhe.com',
    'googln.com',
    'googlo.com',
    'googme.com',
    'googpe.com',
    'googre.com',
    'googte.com',
    'googwe.com',
    'gookle.com',
    'goolle.com',
    'goonle.com',
    'gooqle.com',
    'gooxle.com',
    'gooyle.com',
    'gopgle.com',
    'gpogle.com',
    'guogle.com',
    'gyogle.com',
    'gyoutube.com',
    'oyoutube.com',
    'reeddit.com',
    'wikia.cm',
    'yiutube.com',
    'yotube.com',
    'youtibe.com',
    'youtubd.com',
    'youtubs.com',
    'youtubu.com',
    'yuotube.com',
    'amason.com',
    'ebaay.com',
    'ebbay.com',
    'facebooook.com',
    'fastsuppirt.com',
    'fecebook.com',
    'firert.com',
    'geogle.com',
    'ggmail.com',
    'ghogle.com',
    'giigle.com',
    'gllgle.com',
    'gmial.com',
    'gmil.cm',
    'gmil.com',
    'goggle.com',
    'goigle.com',
    'googae.com',
    'googe.com',
    'googee.com',
    'googfe.com',
    'googhe.com',
    'googl4.com',
    'googln.com',
    'googlo.com',
    'googloe.com',
    'googme.com',
    'googpe.com',
    'googre.com',
    'googte.com',
    'googwe.com',
    'gookle.com',
    'goolle.com',
    'goonle.com',
    'goooogle.com',
    'gooooogle.com',
    'gooqle.com',
    'gooxle.com',
    'gooyle.com',
    'gopgle.com',
    'gpogle.com',
    'guogle.com',
    'gyogle.com',
    'gyoutube.com',
    'hoohle.com',
    'hotmali.com',
    'iutlook.com',
    'outliik.com',
    'outliok.com',
    'outloik.com',
    'outlool.com',
    'outloook.com',
    'ouylook.com',
    'oyoutube.com',
    'paypak.com',
    'poutlook.com',
    'redddit.com',
    'reddiit.com',
    'reddir.com',
    'redditt.com',
    'reeddit.com',
    'scammer.net',
    'teamviewre.com',
    'teddit.com',
    'trxtnow.com',
    'twittre.com',
    'twltter.com',
    'twwitter.com',
    'uotlook.com',
    'uoutibe.com',
    'uoutube.com',
    'voovle.com',
    'washimgtonpost.com',
    'washingtompost.com',
    'wikia.cm',
    'yiutube.com',
    'yootube.com',
    'yoptube.com',
    'yotube.com',
    'youtibe.com',
    'youtoob.com',
    'youtubd.com',
    'youtubs.com',
    'youtubu.com',
    'yuotube.com',
    'yuutube.com',
  ];
  return links;
};
