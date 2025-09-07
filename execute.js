import { module, singleton } from "./design_patterns/index.js";

console.log();

console.log("********************* Module Pattern *********************");
console.log("Addition: ", module.add(5, 3));
console.log("Subtraction: ", module.subtract(5, 3));
console.log("Multiplication: ", module.multiply(5, 3));
console.log("Division: ", module.divide(5, 3));
console.log();

console.log("********************* Singleton Pattern *********************");
singleton.file1[0]();
singleton.file2[0]();
singleton.file3[0]();
console.log();

console.log("********************* Singleton Pattern *********************");
singleton.file1[1]();
singleton.file2[1]();
singleton.file3[1]();
console.log();
