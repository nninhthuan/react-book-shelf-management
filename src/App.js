import { Route, Router } from "react-router-dom";
import "./App.css";
import BookDashboard from "./components/BookDashboard";

function App() {
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
      <BookDashboard 
        bookCategories={bookCategories}
      />
    </div>
  );
}

export default App;
