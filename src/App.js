import "./App.css";
import Data from "./db.json";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { SearchBar } from "./Components/SearchBar";
import { WishList } from "./Components/WishList";

function App() {
  const [userData, setUserData] = useState([]);

  const addData = async (value) => {
    console.log("data", value);

    let val = [...value, (value[3] = uuid())];

    await axios
      .post("https://stockback.herokuapp.com/user", { data: val })
      .then((e) => {
        console.log(e);
        fecthData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fecthData();
  }, []);

  const fecthData = async () => {
    await axios
      .get("https://stockback.herokuapp.com/user")
      .then((e) => {
        console.log("users", e.data);
        setUserData(e.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = async (value) => {
    await axios
      .delete(`https://stockback.herokuapp.com/user/${value}`)
      .then((e) => {
        console.log(e);
        fecthData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <SearchBar
        placeholder={"Search Stocks..."}
        data={Data}
        addData={addData}
      />
      <WishList user={userData} deleteData={deleteData} />
    </div>
  );
}

export default App;
