console.log('start Recipient...');
const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser());
app.use(cors());
mongo = require ('mongodb');
const ObjectId = require('mongodb').ObjectId;

const DB_NAME = 'recipient';
const ENTITY_NAME = 'entity1';
const CONNECTION = 'mongodb://localhost:27017/';

app.get('/entity1', async (req, res) => {
    const client = await mongo.MongoClient.connect(CONNECTION);
    const db = client.db(DB_NAME);
    await db.collection(ENTITY_NAME).find({}).toArray( async (err, result) => {
        res.send(result);
        await client.close();
    });
});

app.get('/entity1/:id', async (req, res) => {
    const client = await mongo.MongoClient.connect(CONNECTION);
    const db = client.db(DB_NAME);
    const result = await db.collection(ENTITY_NAME).findOne({
        _id: new ObjectId(req.params.id)
    });
    res.send(result);
    await client.close();
});

app.delete('/entity1/:id', async (req, res) => {
    const client = await mongo.MongoClient.connect(CONNECTION);
    const db = client.db(DB_NAME);
    await db.collection(ENTITY_NAME).deleteOne( {"_id": ObjectId(req.params.id)});
    await client.close();
    res.send({});
});

app.put('/entity1/:id', async (req, res) => {
    const body = req.body;
    delete body._id;
    const client = await mongo.MongoClient.connect(CONNECTION);
    const db = client.db(DB_NAME);

    await db.collection(ENTITY_NAME).updateOne({_id: new ObjectId(req.params.id)}, {$set: body});

    res.send(body);
    await client.close();
});

app.post('/entity1', async (req, res) => {
    const body = req.body;
    delete body._id;
    const client = await mongo.MongoClient.connect(CONNECTION);
    const db = client.db(DB_NAME);
    const {insertedId: id} = await db.collection(ENTITY_NAME).insertOne(body);

    const result = await db.collection(ENTITY_NAME).findOne({
        _id: new ObjectId(id)
    });
    await client.close();
    res.send(result);
});

app.listen(3001);
