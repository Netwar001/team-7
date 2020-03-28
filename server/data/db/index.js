var mongoClient = require("mongodb").MongoClient;
const db = mongoClient.connect("mongodb://mongo-data:MDcfs7xKwbP2FEnB67cJTENOgoy61wrEG6tAQBWKOti6WWY3hjMObYPyo3ATfLUVX9LJz9zui38tTIYKkpk1wg%3D%3D@mongo-data.mongo.cosmos.azure.com:10255/?ssl=true&appName=@mongo-data@", function (err, client) {
	client.close();
});

module.exports = db;