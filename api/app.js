const express = require('express')
const path = require('path')
const pathToIndex = path.resolve(__dirname, '../client/index.html' );
const app = express();


app.use('/*', (req, res ) => {
    response.sendFile(pathToIndex)


})


module.exports = app;