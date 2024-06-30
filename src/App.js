import { Route, Router } from "react-router-dom";
import "./App.css";
import BookDashboard from "./components/BookDashboard";

function App() {
  const bookCategories = {
    currently: "Currently Reading",
    wantToRead: "Want To Read",
    Read: "Read",
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
