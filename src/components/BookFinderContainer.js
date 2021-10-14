import React, { useState } from "react";
import BookList from "./BookList";
import SearchBook from "./SearchBook";
import Header from "./Header";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { Alert } from "antd";
import "antd/dist/antd.css";

function BookFinderContainer() {
  // fetching the google book API
  const [inputText, setInputText] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const KEY = process.env.REACT_APP_API_KEY;

  const onClose = (e) => {
    setError(false);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBooks([]);
    setLoading(true);
    try {
      setError(false);
      if (inputText === "") {
        setLoading(false);
        const errorMessage = {
          message: "You must enter a search value",
        };
        throw errorMessage;
      }

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${inputText}&key=${KEY}&maxResults=16`
      );
      // console.log(response.data.items);
      if (!response.data.items) {
        setLoading(false);
        const errorMessage = {
          message: "There are no results for your search",
        };
        throw errorMessage;
      }
      setLoading(false);
      setBooks(response.data.items);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMessage(error.message);
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.get(
  //     "https://www.googleapis.com/books/v1/volumes?q=" +
  //       inputText +
  //       "&key=" +
  //       apiKey +
  //       "&maxResults=16".then((data) => {
  //         console.log(data);
  //       })
  //   );
  //   console.log(inputText);
  // };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <SearchBook
          handleChangeProps={handleChange}
          handleSubmitProps={handleSubmit}
        />
      </div>
      {loading && (
        <div className="loader books">
          <LoadingOutlined />
        </div>
      )}

      {error ? (
        <div className="error">
          <Alert
            message="An error has occured"
            description={errorMessage}
            type="error"
            closable
            onClose={onClose}
          />
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default BookFinderContainer;
