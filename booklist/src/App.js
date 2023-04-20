import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BookList from './components/FrontPage_BookList';
import AddBook from './components/AddBook';

const App = () => (
  <div className="container">
    <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/create-book" element={<AddBook />} />
    </Routes>
  </div>
);

export default App;
