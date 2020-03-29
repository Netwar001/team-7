const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

function connect() {
	return mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
}

module.exports = {
	connect,
	mongoose
};