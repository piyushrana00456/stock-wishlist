import "./App.css";
import Data from "./db.json";
import axios from "axios";
import { SearchBar } from "./Components/SearchBar";
import { WishList } from "./Components/WishList";

function App() {
  const addData = async (value) => {
    console.log("data", value);
    await axios
      .post("http://localhost:4000/user", value)
      .then((e) => {
        console.log(e);
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
      <WishList />
    </div>
  );
}

export default App;
