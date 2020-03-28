const mongoose = require('mongoose');
const url = "mongodb://mongo-data:MDcfs7xKwbP2FEnB67cJTENOgoy61wrEG6tAQBWKOti6WWY3hjMObYPyo3ATfLUVX9LJz9zui38tTIYKkpk1wg%3D%3D@mongo-data.mongo.cosmos.azure.com:10255/?ssl=true&appName=@mongo-data@";

const db = mongoose.connect(url, {
    useNewUrlParser: true,
	useMongoClient: true,
})
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;