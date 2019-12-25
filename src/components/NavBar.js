import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

export const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Khoa Do's Reading List</h1>
      <p>Current you have {books.length} books to get through!</p>
    </div>
  );
};
