import React, { useEffect, useState } from "react";
import axios from "axios";
export const WishList = () => {
  const [userData, setUserData] = useState([]);
  console.log("set", userData);
  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    await axios.get("http://localhost:4000/user").then((e) => {
      console.log("users", e.data);
      setUserData(e.data);
    });
  };

  return <div></div>;
};
