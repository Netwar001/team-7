const mongoose = require('mongoose');
const url = ${{ secrets.MongoDB }};

const db = mongoose.connect(url, {
    useNewUrlParser: true,
})
    .then (() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

module.exports = db;