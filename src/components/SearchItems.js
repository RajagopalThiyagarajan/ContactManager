import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const SearchItems = () => {
  const { search, setSearch } = useContext(DataContext);
  return (
    <form
      className="search-form"
      action="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <label className="search-label" htmlFor="search">
        Search For Name or Phone Number:
      </label>
      <input
        type="text"
        id="search"
        role="searchbox"
        className="search-input"
        placeholder="Search Contacts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchItems;
