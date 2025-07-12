const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

// Routes
//const authRoutes = require("./routes/authRoutes"); // 🔐 Login/Register
const bookRoutes = require("./routes/bookRoutes"); // 📚 Book upload/list
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Config
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Routes
app.use("/api/auth", authRoutes);   // 🔐 /api/auth/register, /api/auth/login
app.use("/api/books", bookRoutes);  // 📚 /api/books/add, /api/books/

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  // 👇 If you have these old options, REMOVE them! No longer needed
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err.message));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
