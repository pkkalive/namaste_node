import crypto from 'crypto';

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('1 - Hashing completed');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('2 - Hashing completed');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('3 - Hashing completed');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('4 - Hashing completed');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('5 - Hashing completed');
});

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', () => {
  console.log('6 - Hashing completed');
});