const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

// API routes
app.get("/api/hello", (req, res) => {
    res.json({ message: "Goodbye from Node API" });
});

app.get("/api/test", (req, res) => {
    res.json({ message: "Does this work?" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
