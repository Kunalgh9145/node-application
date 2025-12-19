const express = require("express");
const app = express();

// middleware to parse JSON
app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

// GET API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Express API",
    method: req.method
  });
});

// POST API
app.post("/api/data", (req, res) => {
  res.json({
    receivedData: req.body
  });
});

// PUT API
app.put("/api/update", (req, res) => {
  res.json({
    status: "Data updated",
    data: req.body
  });
});

// DELETE API
app.delete("/api/delete", (req, res) => {
  res.json({
    status: "Data deleted"
  });
});

// Server start
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
