const mongoose = require('mongoose');
const url = 'mongodb://mongo-data:MDcfs7xKwbP2FEnB67cJTENOgoy61wrEG6tAQBWKOti6WWY3hjMObYPyo3ATfLUVX9LJz9zui38tTIYKkpk1wg==@mongo-data.mongo.cosmos.azure.com:10255/[users]?ssl=true';

const db = mongoose.connect(url, {
    useNewUrlParser: true,
})
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;