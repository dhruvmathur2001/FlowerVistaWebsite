const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// const corsOptions = {
//   origin: 'http://localhost:5174', // Frontend address
//   optionsSuccessStatus: 200,
// };

// app.use(cors(corsOptions));

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

mongoose.connect(process.env.MONGODB_URI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
