const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGO_DB || 'mongodb+srv://Netwar:JfMrmDdBPtAJG8FI@cluster0-noog9.mongodb.net/users?retryWrites=true&w=majority';

function connect() {
	mongoose.set('debug', true);
	return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
	connect,
	mongoose
};