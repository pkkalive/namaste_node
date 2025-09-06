let instance = null;
let count = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error(
                "Instance already exists. Use getInstance() to access it."
            );
        }
        instance = this;
    }

    getCount = () => count;
    increment = () => ++count;
    decrement = () => --count;
}

const SingletonCounter = Object.freeze(new Counter());

export default SingletonCounter;
