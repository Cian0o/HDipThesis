const express = require('express');
const servePages = express.Router();
const path = require('path');


servePages.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

servePages.get('/FormProto.html', (req, res) => {
    res.sendFile(path.join(__dirname, '../FormProto.html'));
});

module.exports = servePages;