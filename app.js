const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/users');
const obatRoutes = require('./routes/obat');
const prediksiRoutes = require('./routes/prediksi');
const kadarGulaRoutes = require('./routes/kadar_gula');

app.use('/users', userRoutes);
app.use('/obat', obatRoutes);
app.use('/prediksi', prediksiRoutes);
app.use('/kadar-gula', kadarGulaRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('RESTful API is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
