import SingletonCounter from "./counter.js";
import SingletonCounter2 from "./counter2.js";

function file3_execute() {
    SingletonCounter.increment();
    SingletonCounter.increment();
    console.log("Incremented twice in file3");
    console.log("Counter Value in file3: ", SingletonCounter.getCount());

    console.log("Decrementing once in file3");
    SingletonCounter.decrement();
    console.log("Counter Value in file3: ", SingletonCounter.getCount());
}

function file3_execute2() {
    SingletonCounter2.increment();
    SingletonCounter2.increment();
    console.log("Incremented twice in file3");
    console.log("Counter Value in file3: ", SingletonCounter2.getCount());

    console.log("Decrementing once in file3");
    SingletonCounter2.decrement();
    console.log("Counter Value in file3: ", SingletonCounter2.getCount());
}

export { file3_execute, file3_execute2 };
