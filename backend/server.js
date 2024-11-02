const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const User = require('./models/User'); // Import the User model
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const emailRoutes = require('./routes/email');

const Product = require('./models/Product')

const app = express();
const port = 5000; // or any port you prefer


// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myEcommerceProject', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(cors()); // Enable CORS if you are making requests from a different domain
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // For parsing application/json
app.use('/api', emailRoutes);

app.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, passwordcon, address, iAgree } = req.body;

  // Check if passwords match
  if (password !== passwordcon) {
    return res.status(400).json({ message: 'Password and Confirm password do not match' });
  }

  try {
    // Generate a unique user ID
    const user_id = uuidv4();

    // Create a new user document
    const newUser = new User({
      user_id,
      firstName,
      lastName,
      email,
      password, // In a real application, you should hash the password before saving
      address,
      iAgree
    });

    // Save the new user to the database
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'Signup successful', user_id });
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/loginsubmit', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user || password !== user.password) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      message: 'Login successful',
      user: {
        user_id: user.user_id,
        name: user.firstName + ' ' + user.lastName,
        email: user.email,
        role: user.role // Include role in response
      },
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Email Already Exits' });
  }
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    const { productName, price,priceId } = req.body;
    const filePath = req.file.path;

    const newProduct = new Product({
      productName,
      price,
      priceId,
      filePath,
    });

    await newProduct.save();
    res.status(200).json({ message: 'File uploaded and data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Error uploading file' });
  }
});

// Serve static files from 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// to send the data dymanic in the product page 
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//Add this route to handle fetching all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find({}); // Fetch all users from the database
    res.json(users); // Respond with user data in JSON format
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const result = await User.findByIdAndDelete(userId);
    if (!result) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/products/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    // Find the product and delete it
    const result = await Product.findByIdAndDelete(productId);
    
    if (!result) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Delete the associated image file from the filesystem
    if (result.filePath) {
      fs.unlink(result.filePath, (err) => {
        if (err) {
          console.error('Error deleting file:', err);
        }
      });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



