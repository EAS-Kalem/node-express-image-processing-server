const express = require('express');
const multer = require('multer');
const { request } = require('../app');

router = require(express)

const router = router()
filename((request, file, callback) =>{
    callback(null, file.originalName)
})

const storage = diskStorage(multer)
destination = 'api/uploads/'
filename = filename()
module.exports = router;