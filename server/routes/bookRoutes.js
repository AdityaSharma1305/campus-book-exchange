const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); // ✅ multer config
const cloudinary = require('../config/cloudinary'); // ✅ updated path
const Book = require('../models/Book');
const authMiddleware = require('../middleware/authMiddleware'); // ✅ if login needed to add book
const fs = require('fs');

// @route   POST /api/books/add
// @desc    Upload book with image
router.post('/add', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    // 🖼️ Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'campus-books',
    });

    // 📚 Create new book entry
    const newBook = new Book({
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      imageUrl: result.secure_url,
      imagePublicId: result.public_id,
      uploadedBy: req.user._id, // from auth middleware
    });

    // 💾 Save to DB
    await newBook.save();

    // 🧹 Remove local image after upload
    fs.unlinkSync(req.file.path);

    res.status(200).json({ message: 'Book uploaded successfully!', book: newBook });
  } catch (err) {
    console.error('Error uploading book:', err);
    res.status(500).json({ message: 'Something went wrong!', error: err });
  }
});

// ✅ Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
