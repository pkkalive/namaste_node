const counter = (count) =>
  Object.freeze({
    getCount: () => count,
    increment: () => ++count,
    decrement: () => --count
  });

const SingletonCounter3 = counter(0);

export default SingletonCounter3;
