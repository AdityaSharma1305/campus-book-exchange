import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">📚 Campus Exchange</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/books" className="hover:underline">Books</Link>
          <Link to="/add-book" className="hover:underline">Add Book</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;