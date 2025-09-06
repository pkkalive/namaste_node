// require('./xyz');
import calculateSum, { calculateSum as calSum } from './sum.js';

console.log('App started');

var a = 10;
var b = 20;

// console.log('Name from sum.js: ' + name);

const sum = calculateSum(a, b);
console.log('Sum of ' + a + ' and ' + b + ' is ' + sum);
const sum2 = calSum(30, 40);
console.log('Sum of 30 and 40 is ' + sum2);

setTimeout(() => {
    console.log('Timeout completed');
}, 2000);