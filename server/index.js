const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const db = require('./data/db');
const userRouter = require('./routes/router');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const path = require('path');
app.use(express.static(path.join(__dirname, 'client')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

app.use('/api', userRouter);

app.listen(process.env.PORT || 3000);