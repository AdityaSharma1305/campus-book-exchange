import React from 'react';
import { useUser } from '../context/UserContext';
import BookCard from '../components/BookCard';

const Dashboard = () => {
  const { user } = useUser();

  // 💡 Dummy books for now (can be fetched from backend later)
  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      description: 'Tiny Changes, Remarkable Results.',
      image: 'https://m.media-amazon.com/images/I/91bYsX41DVL.jpg',
    },
    {
      id: 2,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A magical fable about following your dream.',
      image: 'https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg',
    },
    {
      id: 3,
      title: 'Deep Work',
      author: 'Cal Newport',
      description: 'Focused success in a distracted world.',
      image: 'https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg',
    },
    {
      id: 4,
      title: 'Rich Dad Poor Dad',
      author: 'Robert Kiyosaki',
      description: 'What the rich teach their kids about money.',
      image: 'https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg',
    },
    {
      id: 5,
      title: 'Ikigai',
      author: 'Francesc Miralles',
      description: 'The Japanese secret to a long and happy life.',
      image: 'https://m.media-amazon.com/images/I/71tbalAHYCL.jpg',
    },
  ];

  const handlePurchase = (book) => {
    alert(`🎉 You purchased: ${book.title}`);
    // 🔐 Add Razorpay/Stripe integration here in future
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-indigo-800">
          Welcome, {user?.email || "Guest"} 👋
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onPurchase={handlePurchase} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
