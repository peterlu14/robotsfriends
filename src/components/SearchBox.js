import React, { memo } from "react";

const SearchBox = memo(({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="searchbox robots"
        onChange={searchChange}
      />
    </div>
  );
});

export default SearchBox;
