import React, { useState } from "react";
import { SearchResult } from 'components';
import { searchValueInterface } from 'interfaces';


const MainContainer = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchValue, setSearchValue] = useState<searchValueInterface>();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const searchHandler = () => {
    setSearchValue(searchInput);
  };

  return (
    <main className="container-fluid">
      <div className="search-box">
        <input
          className="search-input"
          autoFocus
          type="search"
          placeholder="Search for pictures..."
          onChange={e => changeHandler(e)}
          value={searchInput}
          onKeyDown={(e) => {
            if (e.key === 'Enter') searchHandler();
          }}
        />
        <button
          type="submit"
          className="ms-2"
          onClick={searchHandler}
        >
          Search
        </button>
      </div>

      <h2 className="my-4">Search results</h2>
      <SearchResult searchValue={searchValue} />
    </main>
  );
};

export default MainContainer;

