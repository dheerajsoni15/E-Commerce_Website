const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: String,
  priceId:String,
  price: String,
  filePath: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;