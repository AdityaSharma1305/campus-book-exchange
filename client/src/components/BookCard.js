import React from 'react';

const BookCard = ({ book, onPurchase }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
      <img
        src={book.image}
        alt={book.title}
        className="h-40 w-full object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-bold text-indigo-800">{book.title}</h3>
      <p className="text-sm text-gray-600 mb-1 italic">by {book.author}</p>
      <p className="text-gray-800 mb-4">{book.description}</p>
      <button
        className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
        onClick={() => onPurchase(book)}
      >
        🛒 Purchase Book
      </button>
    </div>
  );
};

export default BookCard;
