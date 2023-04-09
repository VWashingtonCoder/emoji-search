const EmojiRow = ({ title, symbol }) => {
    return(
        <div id="EmojiRow">
            <span className="emoji-row symbol">{symbol}</span>
            <span className="emoji-row title">{title}</span>
        </div>
    );
};

export default EmojiRow;