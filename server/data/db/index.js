const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const env = require('./env/environment');
const mongoUri = `mongodb://${env.accountName}:${env.key}@${env.accountName}.documents.azure.com:${env.port}/${env.databaseName}?ssl=true`;

const db = mongoose.connect(mongoUri, { useMongoClient: true })
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;