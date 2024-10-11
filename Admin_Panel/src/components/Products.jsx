// src/components/Products.js
import React, { useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        image: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setProduct({
            ...product,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('price', product.price);
        formData.append('image', product.image);

        try {
            const response = await axios.post('http://localhost:5000/api/products/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert(response.data.message);
            // Reset the form or handle success response
            setProduct({
                name: '',
                description: '',
                price: '',
                image: null,
            });
        } catch (error) {
            console.error('Error adding product:', error);
            alert('Error adding product. Please try again.');
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="price" className="form-label">Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Product Image</label>
                    <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Product</button>
            </form>
        </div>
    );
};

export default Products;
