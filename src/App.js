import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import SearchForm from "./Components/SearchForm/SearchForm";
import { CountryList } from "./Components/CountrySearch/CountrySearch";
import { Map } from "./Components/MapContainter/Map";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCapital, setSelectedCapital] = useState("Warsaw");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = useCallback((searchOption, searchValue) => {
    if (searchOption === "name") {
      setCountries((prevCountries) => {
        return prevCountries.filter(
          (country) =>
            country.name.common
              .toLowerCase()
              .includes(searchValue.toLowerCase())
        );
      });
    } else if (searchOption === "capital") {
      setCountries((prevCountries) => {
        return prevCountries.filter((country) => {
          if (country.capital && country.capital[0]) {
            return country.capital[0]
              .toLowerCase()
              .includes(searchValue.toLowerCase());
          }
          return false;
        });
      });
    }
  }, []);

  const handleCountryClick = useCallback((capital) => {
    setSelectedCapital(capital);
    console.log(`Selected capital: ${capital}`);
  }, []);

  return (
    <div className="container">
      <div className="sidebar">
        <SearchForm onSearch={handleSearch} />
        <div className="country-list">
          <CountryList
            countries={countries}
            onCountryClick={handleCountryClick}
          />
        </div>
      </div>
      <div className="map-container">
        <Map city={selectedCapital} />
      </div>
    </div>
  );
};

export default App;