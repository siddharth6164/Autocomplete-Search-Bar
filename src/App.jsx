import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [showResults,setShowResults] = useState(false);
  const fetchData = async () => {
    console.log("API",input);
    const data = await fetch("https://dummyjson.com/recipes/search?q="+input);
    const json = await data.json();
    setResults(json.recipes);
  };

  useEffect(() => {
    const timer = setTimeout(fetchData,400);
    return ()=>{
      clearTimeout(timer);
    }
  }, [input]);

  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={()=>{setShowResults(true)}}
          onBlur={()=>{setShowResults(false)}}
        />
        {showResults &&(
          <div className="results-container">
          {results.map((r) => (
            <span className="result" key={r.id}>{r.name}</span>
          ))}
        </div>
        )}
      </div>
    </div>
  );
}

export default App;
