import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const handleLogout = () => {
  signOut(auth);
};

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 shadow-lg flex justify-between">
      <h1 className="text-xl font-bold">📚 Campus Exchange</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/books" className="hover:underline">Books</Link>
        <Link to="/add-book" className="hover:underline">Add Book</Link>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/register" className="hover:underline">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
