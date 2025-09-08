const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://pkkalive:Purush%40h9@namastenode.fbvmbj3.mongodb.net/';

const client = new MongoClient(url);

const dbName = 'HelloWorld';

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('User');

    const insertResult = await collection.insertMany([
      {
        firstName: 'Vivaan',
        lastName: 'Kalive',
        address: {
          street: '414 Larry Court',
          city: 'Piscataway',
          state: 'New Jersey',
          zipcode: '08854',
          country: 'USA'
        },
        mobile: '9082571969'
      }
    ]);
    console.log('Inserted documents =>', insertResult);

    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    return 'done.';
  } catch (error) {
    console.error('Connection failed:', error.message);
    throw error;
  }
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
