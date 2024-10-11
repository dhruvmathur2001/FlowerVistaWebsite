const express = require('express');
const multer = require('multer');
const path = require('path');
const {addProduct, getProducts} = require('../controllers/productController');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the uploads directory
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to file name
    },
});

const upload = multer({ storage });

router.post('/add', upload.single('image'), addProduct);

router.get('/', getProducts);

module.exports = router;
