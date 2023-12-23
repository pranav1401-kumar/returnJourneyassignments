# returnJourneyassignments


To run : node index.ts

Retrieve all Products
URL: /api/products
Method: GET
Description: Fetches all products available.
Request: None
Response:
Status: 200 OK
Body:
json
Copy code
{
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "description": "Description 1"
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "Description 2"
    },
    // ... other products
  ]
}
Create a new Product
URL: /api/products
Method: POST
Description: Creates a new product.
Request:
Body:
json
Copy code
{
  "name": "New Product",
  "description": "Description of the new product"
}
Response:
Status: 201 Created
Body:
json
Copy code
{
  "id": 3,
  "name": "New Product",
  "description": "Description of the new product"
}
Example Requests and Responses
GET /api/products (Fetch all Products)
Request:
bash
Copy code
curl http://localhost:3000/api/products
Response:
json
Copy code
{
  "products": [
    {
      "id": 1,
      "name": "Product 1",
      "description": "Description 1"
    },
    {
      "id": 2,
      "name": "Product 2",
      "description": "Description 2"
    }
  ]
}
POST /api/products (Create a new Product)
Request:
bash
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"name":"New Product","description":"Description of the new product"}' http://localhost:3000/api/products
Response:
json
Copy code
{
  "id": 3,
  "name": "New Product",
  "description": "Description of the new product"
}
This documentation provides information on running the server locally, available endpoints, and examples of requests and responses for the API endpoints. Adjust the details according to your specific API endpoints and functionalities.
