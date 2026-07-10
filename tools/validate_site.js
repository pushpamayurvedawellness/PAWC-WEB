const fs = require('fs');
const path = require('path');

const files = [
  'blog.html',
  ...fs.readdirSync('blog').filter(file => file.endsWith('.html')).map(file => `blog/${file}`),
  'index.html',
  'about.html',
  'treatments.html',
  'doctors.html',
  'corporate-wellness.html'
];

const missing = [];
const badJson = [];

for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"|src="([^"]+)"/g)) {
    const url = match[1] || match[2];
    if (!url || url.startsWith('http') || url.startsWith('tel:') || url.startsWith('mailto:') || url.startsWith('#')) continue;
    const cleanUrl = url.split('#')[0].split('?')[0];
    if (!cleanUrl) continue;
    const target = path.normalize(path.join(path.dirname(file), cleanUrl));
    if (!fs.existsSync(target)) missing.push(`${file} -> ${url}`);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(match[1]);
    } catch (error) {
      badJson.push(`${file}: ${error.message}`);
    }
  }
}

console.log(JSON.stringify({ files: files.length, missing, badJson }, null, 2));
process.exit(missing.length || badJson.length ? 1 : 0);
