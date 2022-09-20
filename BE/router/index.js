const express = require("express");
const router = express.Router();
const booksRouter = require("./books.routes");

router.use("/books", booksRouter);

module.exports = router;
