import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateBook from "./components/CreateBook";
import DeleteBook from "./components/DeleteBook";
import ShowBook from "./components/ShowBook";
import EditBook from "./components/EditBook";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="" element />
    </Routes>
  );
}
