const mongoClient = require("mongodb").MongoClient;
const UserSchema = new mongoClient.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoClient.model('User', UserSchema);