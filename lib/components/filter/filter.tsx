import React from "react";
import { useFilterStore } from "./filter.logic";
import * as styles from "./filter.styles"; // Importing filter styles

interface FilterProps {
  onApplyFilter: (startDate: Date, endDate: Date) => void;
}

const Filter: React.FC<FilterProps> = ({ onApplyFilter }) => {
  const { startDate, endDate, setStartDate, setEndDate, applyFilter } =
    useFilterStore();

  return (
    <div className={styles.filterContainer}>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate ? startDate.toISOString().split("T")[0] : ""}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className={styles.input}
      />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate ? endDate.toISOString().split("T")[0] : ""}
        onChange={(e) => setEndDate(new Date(e.target.value))}
        className={styles.input}
      />
      <button onClick={applyFilter} className={styles.button}>
        {" "}
        {/* Applying button style */}
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
