import React from "react";

function SearchBook(props) {
  return (
    <>
      <form className="form-container" onSubmit={props.handleSubmitProps}>
        <input
          type="text"
          className="input-text"
          onChange={props.handleChangeProps}
        />
        <button type="submit" className="input-submit">
          Search
        </button>
      </form>
    </>
  );
}

export default SearchBook;
