const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
  name: {
    type: String,
  },
  code: {
    type: String,
    unique: true,
  },
  price: {
    type: Number,
  },
  author: {
    type: String,
  },
  ISBN: {
    type: Number,
  },
  publisher: {
    type: String,
  },
  published: {
    type: Date,
  },
});

const Books = mongoose.model("books", BooksSchema);

module.exports = Books;
