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
      <div className="conatin">
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
          {user.map(({ data, id }, key) => {
            return (
              <div key={data[1]} className="dataItem">
                <div className="right">
                  <div
                    style={{
                      color: data[1] > data[2] ? "#2DC6C2" : "#FF4D4F",
                    }}
                    className="stock"
                  >
                    <div>{data[0].split("::")[0]}</div>
                  </div>
                  <div className="Nse">
                    <div>{data[0].split("::")[1]}</div>
                  </div>
                </div>
                <div className="mkt">
                  <div
                    className="up"
                    style={{
                      color: data[1] > data[2] ? "#2DC6C2" : "#FF4D4F",
                    }}
                  >
                    {data[1]}
                  </div>
                  <div className="dwn">
                    <span
                      style={{
                        color:
                          (data[1] - data[2]) / data[2] < -0
                            ? "#FF4D4F"
                            : "#2DC6C2",
                      }}
                      className="arrow"
                    >
                      {(data[1] - data[2]) / data[2] < 0 ? (
                        <ArrowDropDownIcon />
                      ) : (
                        <ArrowDropUpIcon />
                      )}
                    </span>
                    {((data[1] - data[2]) / data[2]).toPrecision(1)}%
                  </div>
                </div>
                <div
                  onClick={() => handleDelete(id)}
                  style={{ display: "none" }}
                  className="add"
                >
                  <DeleteOutlineIcon />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 95%;
  margin: auto;
  position: relative;

  & .conatin {
    width: 100%;
  }
  & .dataResult {
    margin-top: 5px;
    width: 100%;
    height: auto;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;

    & .right {
      width: 20%;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & .Nse > div {
        border-radius: 3px;
        padding: 1px 5px;
        background-color: #fafafa;
        color: gray;
      }
    }

    & .dataItem {
      display: flex;
      padding: 10px 25px;
      margin-bottom: 10px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

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
