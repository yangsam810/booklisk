import React, { useState,  useEffect,  } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import BookCard from './BookCard';



function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('https://final-server-za41.onrender.com')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);
    
    const deleteBook = (id) =>{
      axios.delete('https://final-server-za41.onrender.com' + id)
          .then(response => console.log(response.data));
      setBooks(books.filter(el => el._id !== id))
    }
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard book={book} completeAppointment={deleteBook} key={k} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }
  export default BookList;