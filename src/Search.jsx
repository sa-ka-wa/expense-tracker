function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar-container">
      <h2 className="search-bar-title">Search Expenses</h2>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-bar"
          placeholder="Search expenses..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
