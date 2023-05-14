import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [searchOption, setSearchOption] = useState("name");
  const [searchValue, setSearchValue] = useState("");

  const handleOptionChange = (e) => {
    setSearchOption(e.target.value);
    setSearchValue("");
  };

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchOption, searchValue);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          <input
            type="radio"
            value="name"
            checked={searchOption === "name"}
            onChange={handleOptionChange}
          />
          Search country by name
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="capital"
            checked={searchOption === "capital"}
            onChange={handleOptionChange}
          />
          Search country by capital
        </label>
      </div>
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Enter search value"
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;