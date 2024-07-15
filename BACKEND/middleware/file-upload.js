const multer = require('multer');
const uuid = require('uuid/v1');
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpeg',
};
const fileUpload = multer({
    limits: 50000, // 500 KB
    storage: multer.diskStorage({
        destination:(req, file, cb) => {
            // null for no errors
            cb(null, 'uploads/images');
        } ,
        filename: (req, file, cb) => {
            const ext = MIME_TYPE_MAP[file.mimetype];
            cb(null, uuid() + '.' +ext );
        }
    }),
    filefilter: (req, file, cb) => {
        // !! is used to converted file -> true or undefined -> false
        const isValid = !!MIME_TYPE_MAP[file.mimetype];
        let error = isValid ? null : new Error(' Invalid mime type! ');
        cb(error, isValid);
    }

});

module.exports = fileUpload;
