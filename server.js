const express = require('express');
const path = require('path');

const  app = express();
const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/FormProto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '/FormProto.html'));
});

app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log(`Server started at http://localhost:8080 on port ${port}`);
