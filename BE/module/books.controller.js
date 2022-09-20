const Books = require("./books.model");
async function getBooks(req, res, next) {
  try {
    const books = await Books.find({});
    res.json({
      books: books,
    });
  } catch (error) {
    console.error(error);
  }
}
async function postBooks(req, res, next) {
  console.log(req.body);
  try {
    const body = req.body;
    const book = new Books(body);
    await book.save();
    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "book with this code exists",
    });
  }
}
async function editBooks(req, res, next) {
  try {
    const { id } = req.params;
    console.log(id);
    const book = await Books.findByIdAndUpdate(id, req.body);
    // console.log(book);
    res.json({
      request: book,
    });
  } catch (error) {
    console.error(error);
  }
}
async function deleteBooks(req, res, next) {
  try {
    const { id } = req.params;
    await Books.findByIdAndDelete(id);
    res.json({
      message: "deleted succesfully",
    });
  } catch (error) {
    console.error(error);
  }
}
async function getBookById(req, res, next) {
  try {
    const { id } = req.params;
    const book = await Books.findById(id);
    res.json({
      book,
    });
  } catch (error) {
    console.error(error);
  }
}
module.exports = { getBooks, postBooks, editBooks, deleteBooks, getBookById };
