import SingletonCounter from "./counter.js";

function file2_execute() {
    SingletonCounter.increment();
    SingletonCounter.increment();
    SingletonCounter.increment();
    console.log("Incremented thrice in file2");
    console.log("Counter Value in file2: ", SingletonCounter.getCount());
}

export { file2_execute };
