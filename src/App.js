import { Route, Router } from "react-router-dom";
import "./App.css";
import BookDashboard from "./components/BookDashboard";
import { getAll } from "./BooksAPI";
import { useEffect, useState } from "react";

function App() {
  const [getAllBooks, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((res) => {
      setBooks(res);
    });
  }, []);


  const bookCategories = {
    currently: "Currently Reading",
    wantToRead: "Want To Read",
    Read: "Read",
  };

  return (
    <div className="App">
      <BookDashboard 
        bookCategories={bookCategories}
        allBooks={getAllBooks}
      />
    </div>
  );
}

export default App;
