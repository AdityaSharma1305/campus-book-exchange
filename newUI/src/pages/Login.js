function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-4 p-2 border rounded" />
          <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;