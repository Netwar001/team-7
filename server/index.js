const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const userRouter = require('./routes/router');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGODB_URI);

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${process.env.COSMOSDB_ACCOUNT}:${process.env.COSMOSDB_KEY}@${
  process.env.COSMOSDB_ACCOUNT
}.mongo-data.mongo.cosmos.azure.com:${process.env.COSMOSDB_PORT}/${process.env.COSMOSDB_DB}?ssl=true`;

function connect() {
  mongoose.set('debug', true);
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use('/api', userRouter);

app.listen(process.env.PORT || 3000);