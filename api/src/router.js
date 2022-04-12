const { Router } = require('express');
const multer = require('multer');
const express = require('express');
const { response } = require('../app');


router = require(express)

const router = Router();

const filename = ((request, file, callback) => {
    callback(null, file.originalName);
});

const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,

})
const fileFilter = (request, file, calllback) => {
    if (file.mimetype !== 'image/png') {
        request.fileValidationError = 'Wrong File Type';
        callback(null, false, new Error('Wrong File Type'));
    } else {
        callback(null,true)
    }
};

const upload = multer ({
    fileFilter,
    storage,
});

router.post('/upload', upload.single('photo'), (request, resolve) => {
    if (request.fileValidationError) return response.status(400).json({error: request.fileValidationError})

    return response.status(201).json({success: true});

});

module.exports = router;