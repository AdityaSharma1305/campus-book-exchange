// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-xl shadow-2xl max-w-3xl w-full text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 120 }}
        >
          📚 Campus Book Exchange
        </motion.h1>

        <p className="text-white text-lg md:text-xl mb-8">
          A place where students buy and sell books with trust and ease ✨
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <Link
            to="/books"
            className="bg-white hover:bg-gray-100 text-indigo-700 font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            🔍 Browse Books
          </Link>
          <Link
            to="/add-book"
            className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
          >
            ➕ Add Your Book
          </Link>
        </div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <img
            src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/book.gif"
            alt="Books illustration"
            className="w-full max-h-80 object-contain mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
