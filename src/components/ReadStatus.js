import { useState } from "react";
import "./../utils/read-status.css";

const ReadStatus = () => {
  const [status, setStatus] = useState({
    "Currently Reading": false,
    "Want To Read": false,
    "Read": false,
    "None": true,
  });

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
              >
                {status[`${item}`] ? <>&#x2713;</> : ""} {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReadStatus;
