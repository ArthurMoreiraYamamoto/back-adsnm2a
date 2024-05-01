const { MongoClient } = require('mongodb');

let db = null;

const url = 'mongodb+srv://arthursilvayamamoto:arthuryamamoto@cluster0.v2x7vnd.mongodb.net/'

async function conectarDb() {
    if (db) {
        return db;
    }

    const client = new MongoClient(url);
    await client.connect();
    db = client.db('agenda');
    return db;
}

module.exports = conectarDb;