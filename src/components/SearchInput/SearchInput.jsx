const SearchInput = ({ searchTerm, update }) => {
  return (
    <div id="SearchInput">
      <input
        type="text"
        value={searchTerm}
        onChange={update}
        placeholder="Type Search Term Here"
      />
    </div>
  );
};

export default SearchInput;
