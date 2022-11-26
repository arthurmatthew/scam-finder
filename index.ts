import { generateLinks } from './modules/generateLinks';
const path = require('path');

const BASE_WEBSITES = [
  'youtube',
  'facebook',
  'gmail',
  'twitter',
  'reddit',
  'instagram',
];

console.log(generateLinks(BASE_WEBSITES));
