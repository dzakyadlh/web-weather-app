import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoAPIOptions, geoAPIURL } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const loadOptions = (inputValue) => {
    return fetch(
      `${geoAPIURL}/cities?minPopulation=100000&namePrefix=${inputValue}`,
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
    onSearchChange(searchData);
  };

  const searchStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "25px",
    }),
    option: (provided, state) => ({
      ...provided,
    }),
  };

  return (
    <div className="nav-container">
      <div
        className={`search-container ${
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
      </div>
      <ul className="nav-buttons">
        <li className="nav-button">
          <FontAwesomeIcon icon={faBars} className="nav-icon" />
        </li>
        <li
          className="nav-button"
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          <FontAwesomeIcon icon={faSearch} className="nav-icon" />
        </li>
      </ul>
    </div>
  );
};

export default Search;
