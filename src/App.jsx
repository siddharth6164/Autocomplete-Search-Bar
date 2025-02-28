import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/recipes/search?q=");
    const json = await data.json();
    setResults(json.recipes)
  };
  useEffect(()=>{fetchData()},[input]);
  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
