// src/pages/BookList.js
import React from 'react';
<button
  onClick={() => navigate('/purchase', { state: { selectedBook: book } })}
  className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
>
  Buy Now
</button>

const books = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    title: "Ikigai",
    author: "Francesc Miralles",
    cover: "https://m.media-amazon.com/images/I/81l3rZK4lnL.jpg"
  },
  {
    title: "Think Like a Monk",
    author: "Jay Shetty",
    cover: "https://m.media-amazon.com/images/I/81qKzQz2K-L.jpg"
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    cover: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"
  },
  {
    title: "Wings of Fire",
    author: "Dr. A.P.J Abdul Kalam",
    cover: "https://m.media-amazon.com/images/I/51hb7pZfFLL.jpg"
  },
  {
    title: "The Power of Your Subconscious Mind",
    author: "Joseph Murphy",
    cover: "https://m.media-amazon.com/images/I/71KilybDOoL.jpg"
  },
  {
    title: "Harry Potter & The Sorcerer’s Stone",
    author: "J.K. Rowling",
    cover: "https://m.media-amazon.com/images/I/81YOuOGFCJL.jpg"
  }
];

const BookList = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-700">📚 Explore Available Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 p-4">
            <img src={book.cover} alt={book.title} className="h-60 w-full object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800">{book.title}</h3>
            <p className="text-gray-600 italic">{book.author}</p>
            <button className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold transition duration-200">
              📥 Request Book
              <button onClick={() => navigate('/purchase', { state: { selectedBook: book } })}
              className="bg-purple-500 text-white px-4 py-2 rounded mt-2"
>
  Buy Now
            </button>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
