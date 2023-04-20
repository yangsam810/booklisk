const mongoose = require("mongoose");

// define Schema Class
const Schema = mongoose.Schema;

// Create a Schema object
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description:  { type: String, required: true }
});

const Book = mongoose.model("300351083-sam", bookSchema);
module.exports = Book;