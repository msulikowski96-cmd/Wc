import { readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const css = readFileSync('src/styles.css', 'utf8');
const required = ['World Cup Live Center', 'Live matches', 'Group table', 'Live feed', 'Players to watch'];
const missing = required.filter((text) => !html.includes(text));
if (missing.length) {
  throw new Error(`Missing required dashboard sections: ${missing.join(', ')}`);
}
if (!css.includes('@media (max-width: 860px)')) {
  throw new Error('Responsive breakpoint is missing from stylesheet.');
}
console.log('Static app validation passed.');
