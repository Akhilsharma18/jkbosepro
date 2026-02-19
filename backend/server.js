const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

// Middleware
// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://jkbose-study.vercel.app'],
  credentials: true
}));
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/jkbose_clone')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/admin', require('./routes/authRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/results', require('./routes/resultRoutes'));
app.use('/api/downloads', require('./routes/downloadRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 10000;
app.listen(PORT,  () => console.log(`Server running on port ${PORT}`));
