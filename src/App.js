import React, { useState, useEffect } from "react";
import "./App.css";

const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/countries.json")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching country data:", error));
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.capital.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="search-container">
      <h1>Country & Capital Search</h1>
      <input
        type="text"
        placeholder="Search by country or capital..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="results">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div key={country.name} className="result-item">
              <span className="country-name">{country.name}</span> - <span className="capital-name">{country.capital}</span>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default CountrySearch;
