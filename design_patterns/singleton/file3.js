import SingletonCounter from "./counter.js";

function file3_execute() {
    SingletonCounter.increment();
    SingletonCounter.increment();
    console.log("Incremented twice in file3");
    console.log("Counter Value in file3: ", SingletonCounter.getCount());

    console.log("Decrementing once in file3");
    SingletonCounter.decrement();
    console.log("Counter Value in file3: ", SingletonCounter.getCount());
}

export { file3_execute };
