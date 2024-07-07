import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDashboard from "./components/BookDashboard";
import SearchPage from "./components/SearchPage.js";
import { useEffect, useState } from "react";
import { getAll } from "./BooksAPI.js";

function App() {
  const [allBooks, setBooks] = useState([]);
  // const [currentlyBook, setCurrentlyBook] = useState([]);
  // const [wantToRead, setBookWillRead] = useState([]);
  // const [read, setRead] = useState([]);
  
  const bookCategories = {
    currentlyReading: "currentlyReading",
    wantToRead: "wantToRead",
    read: "read",

    currentlyTitle: "Currently Reading",
    wantToReadTitle: "Want To Read",
    readTitle: "Read",
  };

  useEffect(() => {
    getAll().then((res) => {
      setBooks(res);
      res.forEach(book => {
        book.isShowReadStatus = false;
        book.isShowRoundStatus = true;
      });
    });
  }, []);

  const onSetAllBooks = (books) => {
    setBooks(books);
  };

  return (
    <div className="App">
      <header className="App-header">Book Shelf</header>
      <Routes>
        <Route
          exact
          path="/"
          element={ <BookDashboard bookCategories={bookCategories} books={allBooks} onSetAllBooks={onSetAllBooks}/>}
        />
        <Route
          path="/search"
          element={ <SearchPage/>}
        />
      </Routes>
      
      
    </div>
  );
}

export default App;
