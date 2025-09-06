import fs from "fs";

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise callback").then(console.log);

fs.readFile("./sample.txt", "utf8", () => console.log("File read completed"));

setTimeout(() => console.log("Timer Expired"), 0);

process.nextTick(() => console.log("nextTick callback"));

function printA() {
    console.log("Value of a is " + a);
}

printA();
console.log("End of script");
