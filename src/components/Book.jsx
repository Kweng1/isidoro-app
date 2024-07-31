import React from 'react';
import './Book.css';
const Book = ({ book, toggleStatus }) => (
  <li>
    <span>No.: {book.id}</span> - 
    <span>Title: {book.title}</span> - 
    <span>Author: {book.author}</span> - 
    {book.status === 'Checked Out' && <span>Due Date: {book.dueDate}</span>} - 
    <span>Status: {book.status}</span>
    <button onClick={() => toggleStatus(book.id)}>Toggle Status</button>
  </li>
);

export default Book;
