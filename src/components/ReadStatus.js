import "./../utils/read-status.css";
import { useState } from 'react';

const ReadStatus = (props) => {
  const [status, setStatus] = useState({
    "Currently Reading": false,
    "Want To Read": false,
    "Read": false,
    "None": true,
  });

  const onClickReadStatus = (item) => {

    //Chose proper, item of status can not change value
    let statusObj = {};

    Object.keys(status).map(key => {
      // `${key}` = key === item,
    });
    console.log(status)
    props.onChooseReadStatus(item);
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
