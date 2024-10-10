// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // For navigation links
import styles from "./Navbar.module.css"; // Assuming you create a CSS file for Navbar styles


const Navbar = ({ searchTerm, setSearchTerm }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img
                    src="https://th.bing.com/th/id/OIP.loKKNQfqb7LzxjKU7CRyiAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
                    alt="Contact Manager Icon"
                    className={styles.icon} // Adding class for icon styling
                />
                <Link to="/">Contact Manager</Link>
            </div>
            <div className={styles.links}>
                <Link to="/contacts">Contacts</Link>
                <Link to="/about">About</Link>
                <Link to="/available-contacts">Available Contacts</Link>

            </div>
            
          
        </nav>
    );
};

export default Navbar;
