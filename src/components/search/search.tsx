import React, { FC } from "react";
import "./search.css";
interface SearchInt {
  onChange: any;
}
const Search: FC<SearchInt> = ({ onChange }) => {
  return (
    <div className="searchBox">
      <input
        onChange={onChange}
        className="input"
        type="search"
        placeholder="Search.."
      />
    </div>
  );
};

export default Search;
