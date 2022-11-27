import { generateLinks } from './modules/generateLinks';
const express = require('express');
const path = require('path');

const BASE_WEBSITES = [
  'youtube',
  'facebook',
  'gmail',
  'twitter',
  'reddit',
  'instagram',
];

const app = express();
const port = 8080;

// TODO: Add correct types for req and res, right now the express types package is broken
app.get('/', (req: any, res: any) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/generate-links', (req: any, res: any) => {
  console.log(generateLinks(BASE_WEBSITES));
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
