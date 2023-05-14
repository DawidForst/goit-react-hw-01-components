import { CountryFilters } from "../CountryFilters/CountryFilters";
import React, { useState, useEffect } from "react";

export const CountryList = ({ countries, onCountryClick }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (countries.length > 0) {
      setIsLoading(false);
    }
  }, [countries]);

  const handleCapitalChange = (capital) => {
    console.log(`Selected capital changed: ${capital}`);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h1 style={{ marginBottom: "10px" }}>Country List:</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <CountryFilters
          countries={countries}
          onCountryClick={onCountryClick}
          onCapitalChange={handleCapitalChange}
        />
      )}
    </div>
  );
};


