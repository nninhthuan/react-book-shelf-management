import '../utils/book-dashboard.css';
import BookList from './BookList';

const BookDashboard = (props) => {
  props.allBooks.forEach(book => {
    book.categoryRead = props.bookCategories.currently; //replace = ''
  });

  const currentlyBook = props.allBooks.filter(book => book.categoryRead = props.bookCategories.currently);

  return (
    <div>
      <header className="header">Book Shelf</header>
      <div className="currently-reading-container">
        <h2>{props.bookCategories.currently}</h2>
        <BookList book={currentlyBook}/>
      </div>
    
    </div>
  );
};

export default BookDashboard;