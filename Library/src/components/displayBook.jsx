import BookCard from "./bookCard"

import React, { useState, useEffect } from 'react';

// import { getBooksFromLocalStorage, saveBooksToLocalStorage } from './utilis'


const display = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', year: '' });
  
  
useEffect(() => {
    // Fetch books from local storage when component mounts
    const fetchedBooks = getBooksFromLocalStorage();
    setBooks(fetchedBooks);
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };
 
  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author && newBook.year) {
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);
      saveBooksToLocalStorage(updatedBooks);
      setNewBook({ title: '', author: '', year: '' }); // Reset form
    }
  };
  
  return (
    <div>
      <div className="book-list">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
}
 const getBooksFromLocalStorage = () => {
    const books = localStorage.getItem('bookTable');
    return books ? JSON.parse(books) : [];
  };
   const saveBooksToLocalStorage = (books) => {
    localStorage.setItem('bookTable', JSON.stringify(books));
  };
    export default display