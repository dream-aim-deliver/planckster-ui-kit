import React from "react";
import { useSortStore } from "./sort.logic";
import * as styles from "./sort.styles"; // Importing sort styles

interface SortProps {
  onSort: (sortBy: string, sortOrder: "asc" | "desc") => void;
}

const Sort: React.FC<SortProps> = ({ onSort }) => {
  const { sortBy, sortOrder, setSortBy, setSortOrder, applySort } =
    useSortStore();

  return (
    <div className={styles.sortContainer}>
      <label htmlFor="sortBy">Sort By:</label>
      <select
        id="sortBy"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className={styles.select}
      >
        <option value="date">Date</option>
        <option value="name">Name</option>
      </select>
      <label htmlFor="sortOrder">Sort Order:</label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
        className={styles.select}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <button onClick={applySort} className={styles.button}>
        Apply Sort
      </button>
    </div>
  );
};

export default Sort;
