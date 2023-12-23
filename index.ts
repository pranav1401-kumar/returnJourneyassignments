const express = require('express');

const mongoose = require('mongoose');
const productRoutes =require( "./routes/product.routes");
const requestLogger = require ('./middleware/requestLogger');

const app = express();

app.use(requestLogger);

app.use(express.json());
app.use('/api/products', productRoutes);

// Connect to MongoDB
const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };
  
  // MongoDB connection URL
  const MONGO_URI = 'mongodb://127.0.0.1:27017/traveljourney';
  
  // Connect to MongoDB using the specified options
  mongoose.connect(MONGO_URI, mongooseOptions)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(() => {
      console.error('MongoDB connection error:');
    });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
