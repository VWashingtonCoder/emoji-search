import EmojiRow from "./EmojiRow";

const EmojiResults = ({ results }) => {
  return (
    <div id="EmojiResults">
      {results.map((emoji) => {
        const { title, symbol } = emoji;
        return <EmojiRow title={title} symbol={symbol} />;
      })}
    </div>
  );
};

export default EmojiResults;
