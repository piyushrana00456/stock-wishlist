import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

export const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    const searchquery = e.target.value;
    setQuery(searchquery);
    const newfilter = data.filter((value) => {
      return value[0].toLowerCase().includes(searchquery.toLowerCase());
    });
    if (searchquery === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newfilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setQuery("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={handleQuery}
        />
        <div className="serachIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return <p>{value}</p>;
          })}
        </div>
      )}
    </div>
  );
};
