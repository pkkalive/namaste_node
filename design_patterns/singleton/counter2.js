let count = 0;

const counter = {
    getCount: () => count,
    increment: () => ++count,
    decrement: () => --count,
};

const SingletonCounter2 = Object.freeze(counter);

export default SingletonCounter2;
