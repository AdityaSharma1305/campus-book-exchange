function AddBook() {
  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Add a New Book</h2>
      <form>
        <input type="text" placeholder="Book Title" className="w-full mb-4 p-2 border rounded" />
        <input type="text" placeholder="Author" className="w-full mb-4 p-2 border rounded" />
        <textarea placeholder="Description" className="w-full mb-4 p-2 border rounded h-24"></textarea>
        <input type="file" className="mb-4" />
        <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">Upload</button>
      </form>
    </div>
  );
}

export default AddBook;