import ReadStatus from "./ReadStatus";
import "./../utils/book-list.css";
const BookList = (props) => {
  const onClickRoundStatus = (book) => {
    props.onShowReadStatus(book);
  };

  const onAfterUpdateShelf = (book, shelf) => {
    props.handleAfterUpdateShelf(book, shelf);
  };

  return (
    <div className="list-books-container">
      {props.books && props.books.map((book) => {
        return (
          <div className="books-container" key={book.title + book.subtitle}>
            <div className="book-wrapper">
              <div className="book-image">
                <img src={book.imageLinks.smallThumbnail} alt={book.description}/>
                {book.isShowRoundStatus && (
                  <div
                    className="round-status"
                    onClick={() => onClickRoundStatus(book)}
                  >
                    <div className="triangle"></div>
                  </div>
                )}
              </div>
              <div className="title-book">
                <p className="title-book-label">{book.title}</p>
                <p style={{width: '160%', textAlign: 'left'}}><strong>Author: </strong> {book.authors.join(', ')}</p>
              </div>
            </div>
            <div className="read-status">
              {book.isShowReadStatus && <ReadStatus book={book} onAfterUpdateShelf={onAfterUpdateShelf}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
