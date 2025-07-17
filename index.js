const express = require('express');
const app = express();
const PORT = 4000;

// 🔧 Logging Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request made to ${req.url}`);
  next();
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Logging Server!');
});

// 🛍️ Products routes
app.get('/products', (req, res) => {
  res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
  res.send('A new product has been added.');
});

// 📦 Categories routes
app.get('/categories', (req, res) => {
  res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
  res.send('A new category has been created.');
});

// 🚀 Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
