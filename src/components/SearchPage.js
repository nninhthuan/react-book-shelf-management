import { Link } from "react-router-dom";
import './../utils/search-page.css';
import Arrow from './../assets/icon.js';
import BookList from './BookList';
import { search } from "../BooksAPI.js";
import { useState } from "react";
const SearchPage = (props) => {
  const [searchTxt, setSearchTxt] = useState('');
  const [allBooks, setBook] = useState([]);

  const getValueFromInput = ($event) => {
    setSearchTxt($event.target.value);

    if ($event.code === 'Enter') {
      search(searchTxt, 7).then((books) => {
        if (books.length) {
          books && books.forEach(book => {
            book.isShowReadStatus = false;
            book.isShowRoundStatus = true;
          });
          setBook(books);
        }
      });
    }
  }

  const onShowReadStatus = (book) => {
    allBooks.forEach(item => {
      item.isShowReadStatus = book.title === item.title;
      item.isShowRoundStatus = book.title !== item.title;
    });
    const books = [...allBooks];
    setBook(books);
  }

  const onChangeAfterUpdateShelf = (book, shelf) => {
    allBooks.forEach(item => {
      item.isShowReadStatus = false;
      item.isShowRoundStatus = true;
      if (book.title === item.title) {
        book.shelf = shelf;
      }
    });

    const books = [...allBooks];
    setBook(books);
  }

  return (
    <div className="dashboard-page-route">
      <Link to="/" className="move-dashboard-page">
        <Arrow />
      </Link>
      <div className="search-book-container">
        <div className="input-key-search">
          <input className="search-input" placeholder="Enter book to search"
                 onKeyUp={($event) => getValueFromInput($event)}/>
          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-5.0 -10.0 110.0 135.0">
              <path d="m57.09 70.801c-4.8906 2.6758-10.5 4.1992-16.465 4.1992-18.973 0-34.375-15.402-34.375-34.375s15.402-34.375 34.375-34.375 34.375 15.402 34.375 34.375c0 5.9375-1.5078 11.523-4.1641 16.398l18.66 15.832c2.5 2.1211 3.9961 5.1914 4.1328 8.4688 0.12891 3.2695-1.1094 6.4531-3.4297 8.7734l-0.003907 0.003906c-2.3086 2.3086-5.4844 3.5508-8.7461 3.4219-3.2656-0.12891-6.3281-1.6133-8.4531-4.1016zm8.8555-17.93c1.7969-3.6992 2.8047-7.8555 2.8047-12.246 0-15.523-12.602-28.125-28.125-28.125s-28.125 12.602-28.125 28.125 12.602 28.125 28.125 28.125c4.4062 0 8.582-1.0156 12.297-2.8281 1.9062-0.92969 3.6914-2.0664 5.3281-3.3828 1.5898-1.2852 3.043-2.7383 4.3203-4.332 1.3164-1.6406 2.4492-3.4297 3.375-5.3359zm-3.6367 14.422 15.441 18.07c0.99219 1.1641 2.418 1.8555 3.9453 1.9141 1.5234 0.0625 3-0.51953 4.0781-1.5977l0.007812-0.003907c1.082-1.082 1.6641-2.5664 1.5977-4.1016-0.0625-1.5273-0.75781-2.9609-1.9258-3.9531l-18.113-15.371c-1.5 1.8477-3.1836 3.5391-5.0312 5.043z"/>
            </svg>
          </div>
        </div>
        <div className="search-book-result">
          <BookList books={allBooks} onShowReadStatus={onShowReadStatus} handleAfterUpdateShelf={onChangeAfterUpdateShelf}/>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;