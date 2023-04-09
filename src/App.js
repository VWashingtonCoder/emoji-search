import { useState } from "react";
import EmojiList from "./emojiList.json"
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import EmojiResults from "./components/EmojiResults/EmojiResults";
import './App.css';

function App() {
  const emojiListArr = Object.values(EmojiList);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(emojiListArr.slice(0, 20));

  function findResults(term) {
    const newResults = emojiListArr.filter(emoji => emoji.keywords.includes(term));
    return newResults;
  }

  const updateSearchTerm = (e) => {
    const term = e.target.value
    const results = findResults(term.toLowerCase()); 

    setSearchTerm(term);
    setResults(results);
  }

  return (
    <div className="App">
      <Header emojiList={emojiListArr} />
      <SearchInput searchTerm={searchTerm} update={updateSearchTerm} />
      <EmojiResults results={results} />   
    </div>
  );
}

export default App;
