import ReadStatus from "./ReadStatus";
import "./../utils/book-list.css";
const BookList = (props) => {
  return (
    <div className="list-books-container">
      {props.book.map((book) => {
        book.isShowReadStatus = false;
        book.isShowRoundStatus = true;

        return (
          <div className="books-container" key={book.title}>
            <div className="book-wrapper">
              <div className="book-image">
                <img src={book.imageLinks.smallThumbnail} />
                {book.isShowRoundStatus && (
                  <div
                    className="round-status"
                    onClick={() => {
                      book.isShowReadStatus = true;
                      book.isShowRoundStatus = false;
                      props.onShowReadStatus();
                    }}
                  >
                    <div className="triangle"></div>
                  </div>
                )}
              </div>
              <div className="title-book">{book.title}</div>
            </div>
            <div className="read-status">
              {book.isShowReadStatus && <ReadStatus />}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
