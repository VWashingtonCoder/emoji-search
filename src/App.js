import EmojiList from "./emojiList.json"
import './App.css';
import Header from "./components/Header/Header";
import SearchInput from "./components/SearchInput/SearchInput";
import { useState } from "react";

function App() {
  const emojiListArr = Object.values(EmojiList);
  const [searchTerm, setSearchTerm] = useState("");

  const updateSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="App">
      <Header emojiList={emojiListArr} />
      <SearchInput searchTerm={searchTerm} update={updateSearchTerm} />   
    </div>
  );
}

export default App;
