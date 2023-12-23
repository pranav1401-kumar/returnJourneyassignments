import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  static async getAllProducts(req: Request, res: Response) {
    try {
      const products = await ProductService.getAllProducts();
      res.json(products);
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async createProduct(req: Request, res: Response) {
    try {
      const { name, description } = req.body;
      const newProduct = await ProductService.createProduct(name, description);
      res.status(201).json(newProduct);
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async updateProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const { name, description } = req.body;
      const updatedProduct = await ProductService.updateProduct(productId, name, description);

      if (updatedProduct) {
        res.json(updatedProduct);
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  }

  static async deleteProduct(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const deletedProduct = await ProductService.deleteProduct(productId);

      if (deletedProduct) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ message: 'Product not found' });
      }
    } catch (error: any) {
      res.status(500).json({ message: (error as Error).message });
    }
  }
}

export default ProductController;
