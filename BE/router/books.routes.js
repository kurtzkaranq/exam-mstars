const express = require("express");
const router = express.Router();
const booksController = require("../module");

router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.postBooks);
router.put("/:id", booksController.editBooks);
router.delete("/:id", booksController.deleteBooks);

module.exports = router;
