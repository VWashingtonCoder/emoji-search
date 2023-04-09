const Header = ({ emojiList }) => {
  return (
    <div id="Header">
      <span className="head-icon">{emojiList[78].symbol}</span>
      <h1>Emoji Search</h1>
      <span className="head-icon">{emojiList[79].symbol}</span>
    </div>
  );
};

export default Header;
