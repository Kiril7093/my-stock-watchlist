import { useState } from "react";
import { mockSearchResults } from ".././../constants/mock.js";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import SearchResult from '../SearchResult/SearchResult'



const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState(mockSearchResults.result);

  

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = () => {
    setBestMatches(mockSearchResults.result);
  };

  return (
    <div className="flex item-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border neutral-200">
      <input
        onKey
        type="text"
        className="w-full px-4 py-2 focus: outline-none rounded-md"
        placeholder="Type stock symbol here..."
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            updateBestMatches();
          }
        }}
      />

      {input && (
        <button onClick={clear} className="m-1" >
          <XIcon className="h-4 w-4 fill-gray-500" />
        </button>
      )}


      <button onClick={updateBestMatches} className="h-8 w-8 bg-indigo-500 rounded-md flex justify-center items-center m-1 p2">
    <SearchIcon className="h-4 w-4 fill-gray-100"/>
      </button>

     
     {input&& bestMatches.length>0? <SearchResult results={bestMatches}/>: null}


    </div>
  );
};

export default Search;
