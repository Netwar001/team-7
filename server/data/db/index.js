const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = 'mongodb://mongo-data:MDcfs7xKwbP2FEnB67cJTENOgoy61wrEG6tAQBWKOti6WWY3hjMObYPyo3ATfLUVX9LJz9zui38tTIYKkpk1wg==@mongo-data.mongo.cosmos.azure.com:10255/users?ssl=true';

const db = mongoose.connect(mongoUri, { useMongoClient: true })
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;