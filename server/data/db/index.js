const mongoose = require('mongoose');
const url = process.env.MONGODB_URI || "mongodb+srv://Netwar:4VoVcSZ8qshOOSWT@cluster0-noog9.mongodb.net/users?retryWrites=true&w=majority";

const db = mongoose.connect(url, {
    useNewUrlParser: true,
})
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;