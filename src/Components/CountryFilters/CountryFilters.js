import React, { useState } from "react";
import { Map } from "../MapContainter/Map";

export const CountryFilters = ({ countries, onCountryClick }) => {
  const [selectedCapital, setSelectedCapital] = useState(null);
  const [isMarkerPinned, setIsMarkerPinned] = useState(false);

  const handleCountryClick = (capital) => {
    if (selectedCapital === capital) {
      setSelectedCapital(null);
      setIsMarkerPinned(false);
    } else {
      setSelectedCapital(capital);
      setIsMarkerPinned(true);
    }
    onCountryClick(capital);
  };

  return (
    <div>
      <ul>
        {countries.map((country) => (
          <li
            key={country.name.common}
            onClick={() => handleCountryClick(country.capital?.[0])}
          >
            <img               src={country.flags.svg}
              alt={country.name.common}
              width="50"
              height="30"
            />
            <p>Country: {country.name.common}</p>
            <p>Capital: {country.capital && country.capital[0]}</p>
            {country.population && <p>Population: {country.population}</p>}
            {country.currencies && (
              <p>Currency: {Object.values(country.currencies)[0].name}</p>
            )}
          </li>
        ))}
      </ul>
      {isMarkerPinned && <Map city={selectedCapital} />}
    </div>
  );
};

