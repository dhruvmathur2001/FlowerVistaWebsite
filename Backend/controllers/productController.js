// controllers/productController.js

const Product = require('../models/product');

// Add a new product
const addProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const imagePath = req.file.path;  // Assuming multer has already handled the file upload

        const newProduct = new Product({
            name,
            description,
            price,
            imagePath,
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product added successfully!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all products
const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {addProduct, getProducts}