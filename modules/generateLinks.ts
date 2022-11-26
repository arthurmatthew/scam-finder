// This module generates common links used for scam popup sites

const BASE_WEBSITES = [
  'youtube',
  'facebook',
  'gmail',
  'twitter',
  'reddit',
  'instagram',
];

export const generateLinks = (base: Array<String>, settings?: Object) => {
  let output = new Array<String>();
  for (let i = 0; i < base.length; i++) {
    let link = base[i];
    output = [...output, ...missingLetters(link), ...extraLetters(link)];
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
