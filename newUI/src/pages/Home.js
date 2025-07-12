function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 text-center px-6">
      <h1 className="text-5xl font-bold text-indigo-800 mb-4">Welcome to Campus Book Exchange</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-2xl">
        A platform to buy, sell and exchange books within your college. Connect with students and find the books you need.
      </p>
      <div className="space-x-4">
        <a href="/register" className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">Get Started</a>
        <a href="/books" className="border border-indigo-600 text-indigo-700 px-6 py-2 rounded hover:bg-indigo-100">Browse Books</a>
      </div>
    </div>
  );
}

export default Home;