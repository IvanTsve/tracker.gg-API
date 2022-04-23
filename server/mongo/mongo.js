    const mongodb = require('mongodb');
    const MongoClient = mongodb.MongoClient;
    const connectionString = 'mongodb://localhost:27017';
    const client = new MongoClient(connectionString, { useUnifiedTopology: true });
    client.connect(function (err) {
        const db = client.db('localDB');
    })

module.exports = client;

