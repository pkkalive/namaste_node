import SingletonCounter from './counter.js';
import SingletonCounter2 from './counter2.js';
import SingletonCounter3 from './counter3.js';

function file2_execute() {
  SingletonCounter.increment();
  SingletonCounter.increment();
  SingletonCounter.increment();
  console.log('Incremented thrice in file2');
  console.log('Counter Value in file2: ', SingletonCounter.getCount());
}

function file2_execute2() {
  SingletonCounter2.increment();
  SingletonCounter2.increment();
  SingletonCounter2.increment();
  console.log('Incremented thrice in file2');
  console.log('Counter Value in file2: ', SingletonCounter2.getCount());
}

function file2_execute3() {
  SingletonCounter3.increment();
  SingletonCounter3.increment();
  SingletonCounter3.increment();
  console.log('Incremented thrice in file2');
  console.log('Counter Value in file2: ', SingletonCounter3.getCount());
}

export { file2_execute, file2_execute2, file2_execute3 };
