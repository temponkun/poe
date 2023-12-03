const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://tempmails422:eek7G6ZOokERpxBU@books.4jhmy9x.mongodb.net/';

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('data');
    const collection = database.collection('info');

    // Insert a single document
    const document = { name: 'John Doe', age: 30 };
    await collection.insertOne(document);

    // Insert multiple documents
    const documents = [
      { name: 'ABC', age: 25 },
      { name: 'DEF', age: 40 },
    ];
    await collection.insertMany(documents);

    console.log('Documents inserted successfully');
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
