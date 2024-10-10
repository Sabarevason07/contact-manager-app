import React from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search Contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;