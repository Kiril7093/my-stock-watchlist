import { useContext, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { SearchResult } from "../SearchResult/SearchResult";
import { searchSymbols } from "../../api/stockApi";

const Search = () => {
  const [input, setInput] = useState("");
  const [bestMatches, setBestMatches] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const clear = () => {
    setInput("");
    setBestMatches([]);
  };

  const updateBestMatches = async () => {
    try {
      if (input) {
        const searchResults = await searchSymbols(input);

        const result = searchResults.result;

        setBestMatches(result);
        setShowResults(true);
      } else {
        setBestMatches([]);
        setShowResults(false);
      }
    } catch (error) {
      setBestMatches([]);
      setShowResults(false);
      console.log(error);
    }
  };

  return (
    <div className="relative">
      <div className="flex item-center my-4 border-2 rounded-md z-50 w-96 bg-white border-neutral-200">
        <input
          type="text"
          value={input}
          className="w-full px-4 py-2 focus:outline-none rounded-md"
          placeholder="Type stock symbol here..."
          onChange={(event) => {
            setInput(event.target.value);
            updateBestMatches();
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateBestMatches();
            }
          }}
        />

        {input && (
          <button onClick={clear} className="m-1">
            <XIcon className="h-4 w-4 fill-gray-500" />
          </button>
        )}

        <button
          onClick={updateBestMatches}
          className="h-8 w-8 bg-indigo-500 rounded-md flex justify-center items-center m-1 p2 transition duration-300 hover: ring-2 ringindigo-400"
        >
          <SearchIcon className="h-4 w-4 fill-gray-100" />
        </button>
      </div>

      {showResults && (
        <div className="absolute z-50 top-full left-0 w-full bg-white shadow-lg border-2 border-neutral-200 rounded-b-md">
          {bestMatches.length > 0 ? (
            <SearchResult results={bestMatches} />
          ) : (
            <p className="p-4 text-sm text-gray-500">No results found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
