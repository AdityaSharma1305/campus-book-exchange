
import Book from "../models/Book.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const addBook = async (req, res) => {
  try {
    const { title, description } = req.body;
    const user = req.user; // from auth middleware

    let imageUrl = "";

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "campus-books"
      });
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // remove local temp file
    }

    const newBook = new Book({
      title,
      description,
      image: imageUrl,
      uploadedBy: user._id
    });

    await newBook.save();

    res.status(201).json({ message: "Book added successfully!", book: newBook });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
