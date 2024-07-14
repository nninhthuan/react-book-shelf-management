# Project Title

This is all about application [React Book Shelf Management]. It was created using React library.

## Launch Installation

In the project directory, you can run:
1. Clone the repository to your local machine: 
### `git clone https://github.com/nninhthuan/react-book-shelf-management.git`.

2. Navigate to the project directory:
### `cd react-book-shelf-management`

3. Install any dependencies, necessary library for applicaion
### `npm install` or `yarn install`

4. Start project on the browser.
### `npm start` or `yarn start`

- Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project Description

- This project called React Book Shelf Management. An application manages books that have different state. It may be **want to read**, **currently read**, **read**. And also user can go through the search page to search or add a desired book to your shelf.

- Application is using React with state management to listen any changes from client to display the right part on the browser.

## Project Architecture 
    *from up to down, the number bullets show organising level*
1. App.js: 
  + parent file where all custom components is called, set books is show round icon, hide read table status by default.
  + Organise routing.

2. BookDashboard.js
  + List books to corresponding shelf. It allows for users to open an option and move to another shelf (including a exclude shelf)
  + After moving, React will trigger and update UI
  + It ensures after refreshing the page, the previous page will remain

2. SearchPage.js
  + After you enter from keyboard, it automatically to find list books matching with the results
  + Search Page allows you to update the shelf. If a book has been chose before, when open a shelf list, a tick put ahead a shelf
3. BookList.js
  + Receiving a book as a props and conduct loop to render each book
4. ReadStatus.js
  + Each book will stamp with status, shelf of a book. If book has exist a shelf first, after refresh or open, it still remain the tick for a shelf

## Project Feature
1. Common Feature Introduction:
  **1.1.** Show Read Table Status 
  - After go into your dashboard/ enter key to search. You also see a button like this![alt text](src/assets/btn-show-read-table.png).
  - API that Udacity provides do not exist a property for display read status, It only appears after clicking on the above button ![alt text](src/assets/read-table-status.png). By default, it will not be clicked on any item. If you chose a shelf and then, when open again this table, it will show a matching item with a shelf you chose before.
  - Due to non-exits properties. An idea is to create 2 property to show/hide this table/round icon.
  ```
    res.forEach(book => {
          book.isShowReadStatus = false;
          book.isShowRoundStatus = true;
        });
  ```
2. Dashboard Page

3. Search Page
- For search page, you don&apos;t need to press enter to display search result. After typing from keyboard, application will trigger an event to automatically send to server to query, receive a matching book(s) and display on search page