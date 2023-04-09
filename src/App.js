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

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
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
