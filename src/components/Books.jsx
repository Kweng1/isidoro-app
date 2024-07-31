import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';
import './Book.css';

const booksData = [
  { title: 'Book 1', author: 'John', dueDate: '2024-08-01', status: 'Checked Out' },
  { title: 'Book 2', author: 'Jane', dueDate: '2024-08-02', status: 'Checked Out' },
  { title: 'Book 3', author: 'Mike', dueDate: '2024-08-03', status: 'Checked Out' },
  { title: 'Book 4', author: 'Lisa', dueDate: '2024-08-04', status: 'Checked Out' },
  { title: 'Book 5', author: 'Kenneth', dueDate: '2024-08-05', status: 'Checked Out' },
  { title: 'Book 6', author: 'James', dueDate: '2024-08-06', status: 'Checked Out' },
  { title: 'Book 7', author: 'Andrei', status: 'Available' },
  { title: 'Book 8', author: 'Stacey', status: 'Available' },
  { title: 'Book 9', author: 'Kyle', status: 'Available' },
  { title: 'Book 10', author: 'Alvin', status: 'Available' },
];

const Books = () => {
  const [books, setBooks] = useState(booksData);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const toggleStatus = (id) => {
    setBooks((prevBooks) =>
      prevBooks.map((book, index) =>
        index + 1 === id
          ? { ...book, status: book.status === 'Checked Out' ? 'Available' : 'Checked Out' }
          : book
      )
    );
  };

  return (
    <div>
      <h2>Books List</h2>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <ul>
        {filteredBooks.map((book, index) => (
          <Book key={index} book={{ ...book, id: index + 1 }} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
