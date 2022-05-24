// TO DOs
// names to username and then email?

const username = [
  'jabbathehut',
  'lukewalksthesky',
  'ceethreepeoo',
  'soloofhan',
  'yoda',
];

const email = [
  'jabba@hut.com',
  'luke@skywalker.com',
  'ceethree@peoo.com',
  'solo@han.com',
  'yoda@warofstars.com',
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomName = () =>
  ` ${getRandomArrItem(username)}`;

  const getRandomEmail = () =>
  ` ${getRandomArrItem(email)}`;


// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail};
