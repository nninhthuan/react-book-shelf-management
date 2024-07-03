import '../utils/book-dashboard.css';
import BookList from './BookList';
import { useEffect, useState } from "react";
import {getAll} from './../BooksAPI'
const BookDashboard = (props) => {
  const [allBooks, setBooks] = useState([]);
  const [currentlyBook, setCurrentlyBook] = useState([]);
  const [wantToRead, setBookWillRead] = useState([]);
  const [read, setRead] = useState([]);
  
  useEffect(() => {
    getAll().then((res) => {
      setBooks(res);
      res.forEach(book => {
        book.isShowReadStatus = false;
        book.isShowRoundStatus = true;
      });
      const currentBook = res.filter(book => book.shelf === props.bookCategories.currentlyReading);
      const wantToRead = res.filter(book => book.shelf === props.bookCategories.wantToRead);
      const read = res.filter(book => book.shelf === props.bookCategories.read);

      setCurrentlyBook(currentBook);
      setBookWillRead(wantToRead);
      setRead(read);
    });
  }, []);

  const onShowReadStatus = (book) => {
    allBooks.forEach(item => {
      item.isShowReadStatus = book.title === item.title;
      item.isShowRoundStatus = book.title !== item.title;
    });
    const books = [...allBooks];
    setBooks(books);
  };

  const handleAfterGetValueFromReadStatus = (item) => {
    allBooks.forEach(book => {
      book.isShowReadStatus = false;
      book.isShowRoundStatus = true;
    });
    const books = [...allBooks];
    setBooks(books);
    // console.log(item)
  };
  return (
    <div>
      <header className="header">Book Shelf</header>
      <div className="currently-reading-container">
        <h2>{props.bookCategories.currentlyTitle}</h2>
        <BookList books={currentlyBook} onShowReadStatus={onShowReadStatus} handleAfterGetValueFromReadStatus={handleAfterGetValueFromReadStatus}/>
      </div>
      <div className="want-to-read-container">
        <h2>{props.bookCategories.wantToReadTitle}</h2>
        <BookList books={wantToRead} onShowReadStatus={onShowReadStatus} handleAfterGetValueFromReadStatus={handleAfterGetValueFromReadStatus}/>
      </div>
      <div className="completed-read-container">
        <h2>{props.bookCategories.readTitle}</h2>
        <BookList books={read} onShowReadStatus={onShowReadStatus} handleAfterGetValueFromReadStatus={handleAfterGetValueFromReadStatus}/>
      </div>
    </div>
  );
};

export default BookDashboard;