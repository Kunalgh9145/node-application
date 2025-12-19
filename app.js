const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from Express API",
    method: req.method
  });
});

app.post("/api/data", (req, res) => {
  res.json({
    receivedData: req.body
  });
});

app.put("/api/update", (req, res) => {
  res.json({
    status: "Data updated",
    data: req.body
  });
});

app.delete("/api/delete", (req, res) => {
  res.json({
    status: "Data deleted"
  });
});

module.exports = app;   // 👈 export app

