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
  }, [props.bookCategories]);

  const onShowReadStatus = (book) => {
    allBooks.forEach(item => {
      item.isShowReadStatus = book.title === item.title;
      item.isShowRoundStatus = book.title !== item.title;
    });
    const books = [...allBooks];
    setBooks(books);
  };

  const onChangeAfterUpdateShelf = (book, shelf) => {
    allBooks.forEach(item => {
      item.isShowReadStatus = false;
      item.isShowRoundStatus = true;
      if (book.title === item.title) {
        book.shelf = shelf;
      }
    });

    const currentBook = allBooks.filter(book => book.shelf === props.bookCategories.currentlyReading);
    const wantToRead = allBooks.filter(book => book.shelf === props.bookCategories.wantToRead);
    const read = allBooks.filter(book => book.shelf === props.bookCategories.read);

    setCurrentlyBook(currentBook);
    setBookWillRead(wantToRead);
    setRead(read);
  }

  return (
    <div>
      <header className="header">Book Shelf</header>
      <div className="currently-reading-container">
        <h2>{props.bookCategories.currentlyTitle}</h2>
        <BookList books={currentlyBook} onShowReadStatus={onShowReadStatus} handleAfterUpdateShelf={onChangeAfterUpdateShelf}/>
      </div>
      <div className="want-to-read-container">
        <h2>{props.bookCategories.wantToReadTitle}</h2>
        <BookList books={wantToRead} onShowReadStatus={onShowReadStatus} handleAfterUpdateShelf={onChangeAfterUpdateShelf}/>
      </div>
      <div className="completed-read-container">
        <h2>{props.bookCategories.readTitle}</h2>
        <BookList books={read} onShowReadStatus={onShowReadStatus} handleAfterUpdateShelf={onChangeAfterUpdateShelf}/>
      </div>
    </div>
  );
};

export default BookDashboard;