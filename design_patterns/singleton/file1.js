import SingletonCounter from "./counter.js";
import SingletonCounter2 from "./counter2.js";

function file1_execute() {
    SingletonCounter.increment();
    SingletonCounter.increment();
    console.log("Incremented twice in file1");
    console.log("Counter Value in file1: ", SingletonCounter.getCount());
}

function file1_execute2() {
    SingletonCounter2.increment();
    SingletonCounter2.increment();
    console.log("Incremented twice in file1");
    console.log("Counter Value in file1: ", SingletonCounter2.getCount());
}

export { file1_execute, file1_execute2 };
