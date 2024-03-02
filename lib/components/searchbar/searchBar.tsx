import React from "react";
import { useSearchStore } from "./searchBar.logic";
import * as styles from "./searchbar.styles"; // Importing search bar styles

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const { query, setQuery, search } = useSearchStore();

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
      <button onClick={search} className={styles.button}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
