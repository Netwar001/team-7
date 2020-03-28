const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const mongoUri = process.env.MONGODB_URI;

const db = mongoose.connect(mongoUri, { useMongoClient: true })
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;