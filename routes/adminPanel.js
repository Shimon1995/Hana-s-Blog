const { Router } = require('express');
const multer = require('multer');
const checkAuth = require('../middleware/cheackAuth');
const Portfolio = require('../models/portfolio');

const router = Router();

// Debug variable
let images_counter = 9;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../public/images/');
    },
    filename: (req, file, cb) => {
        cb(null, `image${images_counter}`);
    }
});

function fileFilter(req, file, cb){
    switch(file.mimetype) {
        case 'image/png':
        case 'image/jpg':
        case 'image/jpeg':
            cb(null, true);
        default:
            cb(null, false);
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
});

router.get('/panel', /*checkAuth,*/ (req, res) =>{
    res.status(200).render('panel', {
        title: 'Admin Panel', 
    });
});

router.post('/panel', /*checkAuth,*/ upload.single('Image'), (req, res) => {
    const portfolio = new Portfolio({
        name: req.body.name,
        description: req.body.description,
        image: req.file.path
    })
    .save()
    .then(result => {
        images_counter++;
        res.status(200).json({ result });
        console.log(result)
    })
    .catch(err => console.log(err));
});

module.exports = router;