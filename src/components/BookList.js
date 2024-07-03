import ReadStatus from "./ReadStatus";
import "./../utils/book-list.css";
const BookList = (props) => {
  const onClickRoundStatus = (book) => {
    props.onShowReadStatus(book);
  };

  const onChooseReadStatus = (item) => {
    props.handleAfterGetValueFromReadStatus(item);
  }
  return (
    <div className="list-books-container">
      {props.books.map((book) => {
        return (
          <div className="books-container" key={book.title}>
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
              <div className="title-book">{book.title}</div>
            </div>
            <div className="read-status">
              {book.isShowReadStatus && <ReadStatus onChooseReadStatus={onChooseReadStatus}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
