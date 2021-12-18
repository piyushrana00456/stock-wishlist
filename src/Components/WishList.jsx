import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import styled from "styled-components";
export const WishList = ({ user, deleteData }) => {
  const handleDelete = (value) => {
    deleteData(value);
  };

  return (
    <Wrap>
      <div className="user">
        <div className="userN">
          <span>Piyush</span>
        </div>
        <div className="optn">
          <span>
            <EditIcon />
          </span>
          <span>
            <DeleteOutlineIcon />
          </span>
        </div>
      </div>

      <div className="dataResult">
        {user.map((value, key) => {
          return (
            <div key={value[1]} className="dataItem">
              <div
                style={{
                  color: value[1] > value[2] ? "#2DC6C2" : "#FF4D4F",
                }}
                className="stock"
              >
                {value[0]}
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
                onClick={() => handleDelete(value)}
                style={{ display: "none" }}
                className="add"
              >
                <DeleteOutlineIcon />
              </div>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 50%;
  margin: auto;
  & .dataResult {
    margin-top: 5px;
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    & .dataItem {
      display: flex;
      padding: 10px 25px;
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
  & .user {
    display: flex;
    justify-content: space-between;
    height: 50px;
    padding: 15px;
    border: 1px solid lightgray;
    margin: 15px 0px;
    & .userN {
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 25px;
      font-weight: 700;
    }
    & .optn {
      width: 150px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      & span svg {
        font-size: 30px;
      }
    }
  }
`;
