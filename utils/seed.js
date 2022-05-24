//TO DOS
// thought to THOUGHT and user to USER



const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomName, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  // Create empty array to hold the users
  const users = [];
  const username = getRandomName();
  const email = getRandomEmail();

  console.log(username);
  console.log(email);

  User.push({
    username,
    email
  });


  // Add users to the collection 
  await User.collection.insertMany(users);


  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
