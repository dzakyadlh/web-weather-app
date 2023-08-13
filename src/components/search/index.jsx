import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, GEO_API_URL } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "../../reset.css";
import "./style.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
      geoAPIOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name} ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    setIsSearchOpen(false);
    onSearchChange(searchData);
  };

  const searchStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      backgroundColor: "transparent",
    }),
    input: (provided, state) => ({
      ...provided,
      color: "#f3f3f3",
      border: "none",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "rgba(0, 0, 0, 0.3)" : "transparent",
    }),
    menu: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      border: "none",
      boxShadow: "0",
    }),
  };

  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-part">
          <FontAwesomeIcon icon={faLocationDot} className="nav-icon" />
        </li>
        <li
          className={`nav-part search-box ${
            isSearchOpen ? "search-open" : "search-closed"
          }`}
        >
          <AsyncPaginate
            placeholder="Search a location"
            debounceTimeout={600}
            value={search}
            onChange={handleChange}
            loadOptions={loadOptions}
            styles={searchStyles}
          />
        </li>
        <li
          className={`nav-part search-value ${
            isSearchOpen ? "search-value-hidden" : "search-value-visible"
          }`}
        >
          {search ? (
            <div className="value">{search.label}</div>
          ) : (
            <div className="value">Search a location</div>
          )}
        </li>
        <li
          className="nav-part nav-button"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
        </li>
      </ul>
    </nav>
  );
};

export default Search;
