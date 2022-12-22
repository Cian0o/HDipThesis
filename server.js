const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const  connectDB = require('./config/db');
const cors = require('cors');
// var bodyParser = require('body-parser')
const servePages = require('./routes/servePages.js')

const  app = express();

connectDB();

//Middleware:

// app.use(bodyParser.urlencoded({
//     extended: true
// }));

app.use(express.json());

app.use(cors());

dotenv.config({path:'./config/config.env'});

const port = process.env.port || 5000;

// app.use('servePages.js', servePages)


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/RegisterSurgery.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/RegisterSurgery.html'));
});
app.get('/RegisterPharmacy.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/RegisterPharmacy.html'));
});
app.get('/Prescribe.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/Prescribe.html'));
});
app.get('/FormProto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/FormProto.html'));
});

app.use(express.static(__dirname + '/public'));


app.use('/api/pharmacies', require('./routes/api/pharmacies'));
app.use('/api/surgeries', require('./routes/api/surgeries'));
app.use('/api/docauth', require('./routes/api/docauth'));
app.use('/api/pharmaauth', require('./routes/api/pharmaauth'));
app.use('/api/prescriptions', require('./routes/api/prescriptions'));



app.listen(port, console.log(`Server running http://localhost:${port} in ${process.env.NODE_ENV} mode on port ${port}`) );

// console.log(`Server started at http://localhost:8080 on port ${port}`);
