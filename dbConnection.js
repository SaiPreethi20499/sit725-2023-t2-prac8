
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://SaiPreethi:admin@cluster0.x6mcnwu.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

client.connect();

module.exports = client;