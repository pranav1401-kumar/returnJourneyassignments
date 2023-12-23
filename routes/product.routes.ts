import express from 'express';
import ProductController from '../controller/product.controller';

const router = express.Router();
// GET: Retrieve all products
router.get('/api/products', ProductController.getAllProducts);

// POST: Create a new product
router.post('/api/products', ProductController.createProduct);

// PUT: Update a product by ID
router.put('/api/products/:id', ProductController.updateProduct);

// DELETE: Delete a product by ID
router.delete('/api/products/:id', ProductController.deleteProduct);

export default router;
