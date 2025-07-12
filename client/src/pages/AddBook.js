import React, { useState } from 'react';
import axios from 'axios';

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    description: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'image') {
      const file = e.target.files[0];
      setBookData({ ...bookData, image: file });
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setBookData({ ...bookData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(bookData).forEach((key) => {
        formData.append(key, bookData[key]);
      });

      const res = await axios.post('http://localhost:5000/api/books/add', formData);
      setMessage(res.data.message);
      setBookData({ title: '', author: '', description: '', image: null });
      setPreviewImage(null);
    } catch (err) {
      console.error(err);
      setMessage("❌ Upload failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl border">
        <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">📚 Add a New Book</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Book Title</label>
            <input
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter book title"
              required
            />
          </div>

          {/* Author */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Author</label>
            <input
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter author name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Description</label>
            <textarea
              name="description"
              value={bookData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write a short description..."
              rows="4"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-1 text-gray-700">Book Cover Image</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-white"
              required
            />
            {previewImage && (
              <div className="mt-3">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="h-48 object-cover rounded-md border shadow"
                />
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            ➕ Add Book
          </button>

          {/* Message */}
          {message && (
            <p className={`text-center mt-4 font-semibold ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddBook;
