import '../utils/book-dashboard.css';
import BookList from './BookList';
import { useEffect, useState } from "react";
import {getAll} from './../BooksAPI'
const BookDashboard = (props) => {
  const [allBooks, setBooks] = useState([]);
  const [currentlyBook, setCurrentlyBook] = useState([]);
  
  useEffect(() => {
    getAll().then((res) => {
      res.forEach(book => {
        book.categoryRead = props.bookCategories.currently; //replace = ''
      });

      setBooks(res);
      const currentBook = res.filter(book => book.categoryRead = props.bookCategories.currently);
      setCurrentlyBook(currentBook);
    });
  }, []);

  

  const onShowReadStatus = () => {
    const currentBook = allBooks.filter(book => book.categoryRead = props.bookCategories.currently);
    console.log(currentBook)
    setCurrentlyBook(currentBook);
  };
  return (
    <div>
      <header className="header">Book Shelf</header>
      <div className="currently-reading-container">
        <h2>{props.bookCategories.currently}</h2>
        <BookList book={currentlyBook} onShowReadStatus={onShowReadStatus}/>
      </div>
    
    </div>
  );
};

export default BookDashboard;