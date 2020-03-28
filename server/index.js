const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');
const db = require('./data/db');
const userRouter = require('./routes/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, './client')));
app.get('/*', function (req, res) {
    res.sendFile(path.join('./client/index.html'));
});

app.use('/api', userRouter);

module.exports = app;