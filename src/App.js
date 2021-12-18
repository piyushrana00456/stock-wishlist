import "./App.css";
import Data from "./db.json";
import { SearchBar } from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar placeholder={"Search Stocks..."} data={Data} />
    </div>
  );
}

export default App;
