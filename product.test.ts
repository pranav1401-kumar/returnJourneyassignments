import request from 'supertest';
import express, { Express } from 'express';

// Mock product data
const products = [
  { id: 1, name: 'Product 1', description: 'Description 1' },
  { id: 2, name: 'Product 2', description: 'Description 2' },
];

// Mock Express app with product endpoints
const createMockApp = (): Express => {
  const app = express();

  app.use(express.json());

  app.get('/api/products', (req, res) => {
    res.json({ products });
  });

  app.post('/api/products', (req, res) => {
    const { name, description } = req.body;
    const newProduct = { id: products.length + 1, name, description };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

 

  return app;
};

// Testing
describe('Product API Endpoints', () => {
  let app: Express;

  beforeAll(() => {
    app = createMockApp();
  });

  it('should fetch all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('products', products);
  
  });

  it('should create a new product', async () => {
    const newProduct = {
      name: 'Test Product',
      description: 'This is a test product',
    };

    const res = await request(app).post('/api/products').send(newProduct);
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty('id');
    
  });



  afterAll(() => {
    
  });
});
