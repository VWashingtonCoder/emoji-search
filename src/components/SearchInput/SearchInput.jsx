const SearchInput = ({ searchTerm, update }) => {
    return(
        <div id="SearchInput">
            <input type="text" value={searchTerm} onChange={update}/>
        </div>
    );
}

export default SearchInput;