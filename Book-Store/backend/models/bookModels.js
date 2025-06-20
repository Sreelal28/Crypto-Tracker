import mongoose from "mongoose";
const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
