const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ishit:123@cluster0.oibm8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("MongoDB Connection Error:", err));

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Create Mongoose Model
const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };
