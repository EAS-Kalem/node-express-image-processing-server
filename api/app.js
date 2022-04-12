const express = require('express')
const path = require('path')
const pathToIndex = '../client/index.html';
const app = express();
path.resolve(__dirname, '../client/index.html' ),

app.use('/*', (req, res ) => {
    sendFile(res, pathToIndex)
})


module.exports = app;