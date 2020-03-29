const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGO_DB;

function connect() {
	mongoose.set('debug', true);
	return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
	connect,
	mongoose
};