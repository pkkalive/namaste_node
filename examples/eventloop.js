import fs from "fs";

const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./sample.txt", "utf8", () => console.log("File read completed"));

setTimeout(() => console.log("Timer Expired"), 0);

function printA() {
    console.log("Value of a is " + a);
}

printA();
console.log("End of script");
