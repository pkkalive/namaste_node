import fs from 'fs';

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('Timer Expired'), 0);

Promise.resolve("Promise callback").then(console.log);

fs.readFile('./sample.txt', 'utf8', () => console.log('File read completed'));

process.nextTick(() => {
    process.nextTick(() => console.log("inside nextTick"));
    console.log("nextTick callback")
});

console.log('End of script');