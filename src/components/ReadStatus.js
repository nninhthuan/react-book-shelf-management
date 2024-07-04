import { update } from "../BooksAPI";
import "./../utils/read-status.css";
import { useState } from 'react';

const ReadStatus = ({book, onAfterUpdateShelf}) => {
  const [status, setStatus] = useState({
    "Currently Reading": book.shelf === 'currentlyReading',
    "Want To Read": book.shelf === 'wantToRead',
    "Read": book.shelf === 'read',
    "None": book.shelf === '',
  });

  const onClickReadStatus = (item) => {
    const convertShelf = {
      'currentlyReading' : 'Currently Reading',
      'wantToRead': 'Want To Read',
      'read': 'Read',
      'none': 'None',

    }

    Object.keys(convertShelf).forEach(shelf => {
      if ([convertShelf[shelf]][0] === item) {
        update(book, shelf);
        onAfterUpdateShelf(book, shelf);
      }
    })

    const currentStatus = {
      ...status,
      "Currently Reading": item === "Currently Reading",
      "Want To Read": item === "Want To Read",
      "Read": item === "Read",
      "None": item === "None",
    };
    
    setStatus(currentStatus);
  }

  return (
    <div className="read-status-container">
      <p className="move-to">Move to</p>
      <div className="status-container">
        <ul>
          {Object.keys(status).map((item) => {
            return (
              <li
                key={item}
                className={`${
                  status[`${item}`]
                    ? "is-active-status-item"
                    : "default-status-item"
                }`}
                onClick={() => onClickReadStatus(item)}
              >
                {status[`${item}`] ? <>&#x2713;</> : ""} <span className="status-item">{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReadStatus;
