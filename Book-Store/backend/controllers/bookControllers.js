import Book from "../models/bookModels.js";

const createBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;

    if (!title || !author || !publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishYear",
      });
    }

    const book = await Book.create({ title, author, publishedYear });

    res.status(201).json({
      success: true,
      message: "Book Added Succcessfully",
      book,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to create BOOK",
    });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      count: books.length,
      books,
      message: "fetched all book successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      success: false,
      message: "Failed to get all BOOKS",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, publishedYear } = req.body;
    const { id } = req.params;

    if (!title || !author || !publishedYear) {
      return res.status(400).send({
        message: "Send all required fields: title, author, publishedYear",
      });
    }

    const result = await Book.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Book not found" });
    }

    return res.status(200).send({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
};
export { deleteBook, createBook, getAllBooks, getBookById, updateBook };
