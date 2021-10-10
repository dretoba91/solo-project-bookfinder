import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

function BookCard(props) {
  return (
    <div className="book-card">
      <div className="book-card-content">
        {props.bookItems.volumeInfo.imageLinks ? (
          <img
            role="button"
            onClick={() => props.showBook(props.bookItems)}
            onKeyDown={() => props.showBook(props.bookItems)}
            className="card-img"
            alt="book-cover"
            src={props.bookItems.volumeInfo.imageLinks.smallThumbnail}
          />
        ) : null}{" "}
        {props.bookItems.title ? (
          <h4>{props.bookItems.volumeInfo.title}</h4>
        ) : null}{" "}
        {props.bookItems.volumeInfo.authors ? (
          <p>Author: {props.bookItems.volumeInfo.authors[0]}</p>
        ) : null}{" "}
        {props.bookItems.volumeInfo.publisher ? (
          <p>Publisher: {props.bookItems.volumeInfo.publisher}</p>
        ) : null}
      </div>

      <div className="button-div">
        <a
          href={
            props.bookItems.volumeInfo.infoLink
              ? props.bookItems.volumeInfo.infoLink
              : "#"
          }
        >
          <Button className="card-button" size="small" type="primary">
            Book info
          </Button>
        </a>
      </div>
    </div>
  );
}

export default BookCard;
