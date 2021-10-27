const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connect = require('./database/connect')
connect();

app.use('/api/v1/products', require('./routes/productsRoute'))
app.get('/', (req, res) => {
    res.send('hello world')
})

PORT = 5000;
app.listen(process.env.PORT, () => {
    console.log(`server start${PORT}`)
})