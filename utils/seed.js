const mongoose = require('mongoose');
const Product = require('../models/Product').default;  // Import your Product model

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Dummy product data (20 products)
const products = [
  {
    name: "Apple iPhone 14",
    description: "Latest Apple smartphone with stunning design and features.",
    price: 999.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Samsung Galaxy S21",
    description: "Flagship phone from Samsung with a powerful camera.",
    price: 899.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Google Pixel 7",
    description: "Google's own smartphone with a clean Android experience.",
    price: 799.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Sony WH-1000XM4 Headphones",
    description: "Industry-leading noise canceling headphones from Sony.",
    price: 349.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Apple MacBook Pro",
    description: "High-performance laptop with Apple’s M1 chip.",
    price: 1299.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Dell XPS 13",
    description: "Compact and powerful ultrabook with a beautiful display.",
    price: 1099.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Microsoft Surface Pro 8",
    description: "Versatile laptop-tablet hybrid with powerful features.",
    price: 899.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Bose QuietComfort 35 II",
    description: "Noise-canceling wireless headphones with superb sound quality.",
    price: 299.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Sony PlayStation 5",
    description: "Next-generation gaming console with immersive graphics.",
    price: 499.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Xbox Series X",
    description: "Powerful gaming console with 4K gaming capabilities.",
    price: 499.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Logitech MX Master 3",
    description: "Ergonomic wireless mouse with precise controls.",
    price: 99.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Apple Watch Series 7",
    description: "Advanced smartwatch with health tracking features.",
    price: 399.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Fitbit Charge 5",
    description: "Fitness tracker with heart rate monitoring and GPS.",
    price: 149.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Nikon D3500 DSLR",
    description: "Entry-level DSLR camera with 24.2MP sensor.",
    price: 499.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Canon EOS R6",
    description: "Full-frame mirrorless camera with 4K video recording.",
    price: 2499.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "GoPro Hero 10",
    description: "Action camera with 5.3K video and image stabilization.",
    price: 499.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "DJI Mavic Air 2",
    description: "Compact drone with 4K camera and intelligent flight modes.",
    price: 799.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "HP Envy 13",
    description: "Lightweight laptop with impressive performance and display.",
    price: 899.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "ASUS ROG Strix G15",
    description: "Gaming laptop with high refresh rate and powerful graphics.",
    price: 1399.99,
    imageUrl: "https://via.placeholder.com/200x150"
  },
  {
    name: "Nintendo Switch",
    description: "Popular gaming console with hybrid home and handheld modes.",
    price: 299.99,
    imageUrl: "https://via.placeholder.com/200x150"
  }
];

// Function to seed the database
const seedDB = async () => {
  await Product.deleteMany({});  // Clear existing products
  await Product.insertMany(products);  // Insert new products
  console.log("Database seeded with dummy products");
};

// Run the seed function
seedDB().then(() => {
  mongoose.connection.close();  // Close the connection after seeding
});
