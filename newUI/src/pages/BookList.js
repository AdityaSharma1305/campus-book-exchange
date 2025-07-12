const dummyBooks = [
  { title: "DSA Made Easy", author: "Aditya", description: "Master Data Structures & Algorithms", imageUrl: "https://placehold.co/300x400" },
  { title: "Operating Systems", author: "Galvin", description: "Concepts & Practices", imageUrl: "https://placehold.co/300x400" }
];

function BookList() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Available Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dummyBooks.map((book, index) => (
          <div key={index} className="bg-white rounded shadow p-4 hover:shadow-lg">
            <img src={book.imageUrl} alt={book.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-lg font-bold">{book.title}</h3>
            <p className="text-sm text-gray-600">by {book.author}</p>
            <p className="mt-2 text-sm">{book.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;