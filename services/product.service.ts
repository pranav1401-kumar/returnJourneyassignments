import Product, { IProduct } from '../model/product.model';

class ProductService {
  // Retrieve all products
  static async getAllProducts(): Promise<IProduct[]> {
    try {
      const products = await Product.find({});
      return products;
    } catch (error: any) {
      throw new Error(`Error while fetching products: ${(error as Error).message}`);
    }
  }

  // Retrieve a product by ID
  static async getProductById(productId: string): Promise<IProduct | null> {
    try {
      const product = await Product.findById(productId);
      return product;
    } catch (error: any) {
      throw new Error(`Error while fetching product: ${(error as Error).message}`);
    }
  }

  // Create a new product
  static async createProduct(name: string, description: string): Promise<IProduct> {
    try {
      const newProduct = await Product.create({ name, description });
      return newProduct;
    } catch (error: any) {
      throw new Error(`Error while creating product: ${(error as Error).message}`);
    }
  }

  // Update a product by ID
  static async updateProduct(
    productId: string,
    name: string,
    description: string
  ): Promise<IProduct | null> {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, description },
        { new: true }
      );
      return updatedProduct;
    } catch (error: any) {
      throw new Error(`Error while updating product: ${(error as Error).message}`);
    }
  }

  // Delete a product by ID
  static async deleteProduct(productId: string): Promise<boolean> {
    try {
      const deletedProduct = await Product.findByIdAndDelete(productId);
      return !!deletedProduct;
    } catch (error: any) {
      throw new Error(`Error while deleting product: ${(error as Error).message}`);
    }
  }
}

export default ProductService;
