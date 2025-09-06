import SingletonCounter from "./counter.js";

function file1_execute() {
    SingletonCounter.increment();
    SingletonCounter.increment();
    console.log("Incremented twice in file1");
    console.log("Counter Value in file1: ", SingletonCounter.getCount());
}

export { file1_execute };
