import React, { useState } from "react";
import BookCard from "./BookCard";
import { Modal } from "antd";
import "antd/dist/antd.css";

function BookList({ books }) {
  const [showUp, setShowup] = useState({});
  const [visibleBook, setVisibleBook] = useState(false);

  const showBook = (bookInfo) => {
    setVisibleBook(true);
    if (bookInfo.volumeInfo.imageLinks.thumbnail) {
      setShowup({
        image: bookInfo.volumeInfo.imageLinks.thumbnail,
      });
    }
  };

  const handleOk = () => {
    setVisibleBook(false);
  };

  const handleCancel = () => {
    setVisibleBook(false);
  };

  const book = books.map((item) => (
    <BookCard key={item.etag} bookItems={item} showBook={showBook} />
  ));

  return (
    <div>
      <div className="book-list">{book}</div>

      <Modal
        title={showUp.title}
        visible={visibleBook}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <img
          src={showUp.image}
          alt="book-example"
          style={{ width: 250, height: 275 }}
        />
      </Modal>
    </div>
  );
}

export default BookList;
