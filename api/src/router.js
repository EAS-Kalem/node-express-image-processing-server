
const multer = require('multer');
const express = require('express');
const { Router } = require('express');
const { response } = require('../app');
const router = Router();

router = require(express)



const filename = ((request, file, callback) => {
    callback(null, file.originalName);
});

const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,

})
const fileFilter = (request, file, callback) => {
    if (file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong File Type';
        callback(null, false, new Error('Wrong File Type'));
    } else {
        callback(null,true)
    }
};

const upload = multer({
    fileFilter,
    storage,
});

router.post('/upload', upload.single('photo'), (request, resolve) => {
    if (request.fileValidationError) return response.status(400).json({error: request.fileValidationError})

    return response.status(201).json({success: true});

});

module.exports = router;