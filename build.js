const fs = require('fs');
const path = require('path');
const marked = require('marked');

const resume = fs.readFileSync(path.join(__dirname, './README.md'), 'utf8');
const content = marked(resume);

const tmpl = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Jiangshui "Harry" Yu - Web Developer</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    ${content}
  </body>
</html>
`;

fs.writeFileSync(path.join(__dirname, './index.html'), tmpl, 'utf8');
