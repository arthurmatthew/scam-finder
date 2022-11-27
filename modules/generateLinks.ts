// This module generates common links used for scam popup sites

const BASE_WEBSITES = [
  'youtube',
  'facebook',
  'gmail',
  'twitter',
  'reddit',
  'instagram',
  'outlook',
  'teamviewer',
];

export const generateLinks = (base: Array<String>, settings?: Object) => {
  let output = new Array<String>();
  for (let i = 0; i < base.length; i++) {
    let link = base[i];
    output = [
      ...output,
      ...missingLetters(link),
      ...extraLetters(link),
      ...commonScamLinks(),
    ];
  }
  return [...new Set(output)];
};

const missingLetters = (base: String) => {
  let links: Array<String> = [];
  let link = base;
  for (let i = 0; i < link.length; i++) {
    links.push(link.slice(0, i) + link.slice(i + 1));
  }
  return links;
};
const extraLetters = (base: String) => {
  let links: Array<String> = [];
  let link = base;
  for (let i = 0; i < link.length; i++) {
    links.push(link.slice(0, i) + link[i] + link.slice(i));
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
