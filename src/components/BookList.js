import ReadStatus from "./ReadStatus";
import './../utils/book-list.css';
const BookList = ({books}) => {
  return (
    <div className="books-container">
      <div className="book-wrapper">
        <div className="book-image">
          <img src="http://books.google.com/books/content?id=1wy49i-gQjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"/>
        </div>
        <div className="read-status">
            <div className="round-status"></div>
            {/* <ReadStatus /> */}
        </div>
        <div className="title-book">Hi</div>
      </div>
    </div>
  );
};

export default BookList;