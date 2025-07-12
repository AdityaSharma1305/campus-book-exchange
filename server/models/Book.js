const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
  imageUrl: String,
  imagePublicId: String,
  semester: String,
  branch: String,
  condition: String,
  price: Number,
  sellerName: String,
  sellerEmail: String,
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
