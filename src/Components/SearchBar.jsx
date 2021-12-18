import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";
import styled from "styled-components";
export const SearchBar = ({ placeholder, data, addData }) => {
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

  const handleData = (value) => {
    addData(value);
  };

  return (
    <Search>
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
          {filteredData.map((value, key) => {
            return (
              <div key={value[1]} className="dataItem">
                <div
                  style={{
                    color: value[1] > value[2] ? "#2DC6C2" : "#FF4D4F",
                  }}
                  className="stock"
                >
                  {value[0].split("\n")}
                </div>
                <div className="mkt">
                  <div
                    className="up"
                    style={{
                      color: value[1] > value[2] ? "#2DC6C2" : "#FF4D4F",
                    }}
                  >
                    {value[1]}
                  </div>
                  <div className="dwn">
                    <span
                      style={{
                        color:
                          (value[1] - value[2]) / value[2] < -0
                            ? "#FF4D4F"
                            : "#2DC6C2",
                      }}
                      className="arrow"
                    >
                      {(value[1] - value[2]) / value[2] < 0 ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )}
                    </span>
                    {((value[1] - value[2]) / value[2]).toPrecision(1)}%
                  </div>
                </div>
                <div
                  onClick={() => handleData(value)}
                  style={{ display: "none" }}
                  className="add"
                >
                  <AddBoxIcon />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Search>
  );
};

const Search = styled.div`
  width: 50%;

  margin: auto;
  & .searchInput {
    width: 100%;
    border: 1px solid lightgray;
    margin: auto;
    display: flex;

    & input {
      width: 90%;
      border: none;
      border-radius: 2px;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      font-size: 18px;
      padding: 15px;
      height: 30px;
    }
    & .serachIcon {
      height: 60px;
      width: 10%;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & input:focus {
      outline: none;
    }
    & .serachIcon svg {
      font-size: 35px;
    }
  }
  & .dataResult {
    margin-top: 5px;
    width: 100%;
    height: 400px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    & .dataItem {
      display: flex;
      padding: 10px;
      /* justify-content: space-between; */
      margin-bottom: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      & .stock {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        display: flex;
        width: 20%;
        justify-content: center;
        align-items: center;
      }

      & .mkt {
        margin-left: 60%;
        width: 20%;
        text-align: center;
        /* border: 1px solid red; */
        & .up {
          font-size: 20px;
          font-weight: 500;
        }
        & .dwn {
          font-size: 20px;
          font-weight: 500;
          display: flex;
          justify-content: center;

          & .arrow {
          }
          & .arrow svg {
            margin-bottom: 0px;
          }
        }
      }
    }
    & .dataItem:hover > .add {
      display: block !important;
    }

    & .add {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    & .add svg {
      font-size: 40px;
      margin-top: 15px;
      cursor: pointer;
    }
  }
  & .dataResult::-webkit-scrollbar {
    display: none;
  }
`;
