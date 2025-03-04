import { Route, Routes } from "react-router-dom";
import "./App.css";
import BookDashboard from "./components/BookDashboard";
import SearchPage from "./components/SearchPage.js";
// import { useState } from "react";

function App() {
  // const [allBooks, setBooks] = useState([]);
  
  const bookCategories = {
    currentlyReading: "currentlyReading",
    wantToRead: "wantToRead",
    read: "read",

    currentlyTitle: "Currently Reading",
    wantToReadTitle: "Want To Read",
    readTitle: "Read",
  };

  return (
    <div className="App">
      <header className="App-header">Book Shelf</header>
      <Routes>
        <Route
          exact
          path="/"
          element={ <BookDashboard bookCategories={bookCategories} />}
        />
        <Route
          path="/search"
          element={ <SearchPage />}
          // onSetAllBooks={onSetAllBooks}
        />
      </Routes>
    </div>
  );
}

export default App;
