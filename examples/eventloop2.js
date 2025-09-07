import fs from 'fs';
import https from 'https';

process.nextTick(() => console.log('nextTick callback'));

Promise.resolve().then(() => console.log('Promise callback'));

setTimeout(() => console.log('setTimeout callback'), 0);

setImmediate(() => console.log('setImmediate callback'));

fs.readFile('./sample.txt', () => {
  console.log('File read callback');
});

https.get('https://www.google.com', () => {
  console.log('HTTP request callback');
});
