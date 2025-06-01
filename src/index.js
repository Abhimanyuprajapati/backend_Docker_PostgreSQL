import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file
const app = express(); // Create an Express application
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json()); // parse json bodies
app.use(cors()); // enable CORS
app.use(express.static("public")); // serve static files from 'public' directory

// routes
// Sample test route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

//  Error handling middleware

// server start

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
