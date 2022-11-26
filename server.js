const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const  connectDB = require('./config/db');

const servePages = require('./routes/servePages.js')

const  app = express();
connectDB();

dotenv.config({path:'./config/config.env'});

const port = process.env.port || 5000;

// app.use('servePages.js', servePages)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/FormProto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/FormProto.html'));
});

app.use(express.static(__dirname + '/public'));

app.use('servePages.js', servePages)


app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`) );

// console.log(`Server started at http://localhost:8080 on port ${port}`);
