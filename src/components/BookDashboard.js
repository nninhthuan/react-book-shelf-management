import '../utils/book-dashboard.css';
import BookList from './BookList';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const BookDashboard = (props) => {
  const [currentlyBook, setCurrentlyBook] = useState([]);
  const [wantToRead, setBookWillRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    const recentBook = props.books.filter(book => book.shelf === props.bookCategories.currentlyReading);
    const desiredRead = props.books.filter(book => book.shelf === props.bookCategories.wantToRead);
    const haveRead = props.books.filter(book => book.shelf === props.bookCategories.read);

    setCurrentlyBook(recentBook);
    setBookWillRead(desiredRead);
    setRead(haveRead);
  }, [props])

  const onShowReadStatus = (book) => {
    props.books.forEach(item => {
      item.isShowReadStatus = book.title === item.title;
      item.isShowRoundStatus = book.title !== item.title;
    });
    const books = [...props.books];
    props.onSetAllBooks(books)
  };

  const onChangeAfterUpdateShelf = (book, shelf) => {
    props.books.forEach(item => {
      item.isShowReadStatus = false;
      item.isShowRoundStatus = true;
      if (book.title === item.title) {
        book.shelf = shelf;
      }
    });

    const currentBook = props.books.filter(book => book.shelf === props.bookCategories.currentlyReading);
    const wantToRead = props.books.filter(book => book.shelf === props.bookCategories.wantToRead);
    const read = props.books.filter(book => book.shelf === props.bookCategories.read);

    setCurrentlyBook(currentBook);
    setBookWillRead(wantToRead);
    setRead(read);
  }

  return (
    <div>
      <div className="search-page-route">
        <Link to="/search" className="move-search-page">+</Link>
      </div>
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