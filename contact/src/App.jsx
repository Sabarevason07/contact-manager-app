import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Contacts from "./components/Contacts";
import About from "./components/About"; // Assuming you have an About component
import Navbar from "./components/Navbar";
import AvailableContacts from "./components/AvailableContacts"; // Import the new component
import WelcomePage from "./components/WelcomePage"; 

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [contacts, setContacts] = useState([]);

    // Fetch contacts dynamically from an API
    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                const formattedContacts = response.data.map((contact) => ({
                    id: contact.id,
                    name: contact.name,
                    phone: contact.phone,
                }));
                setContacts(formattedContacts); // Update state with the fetched contacts
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };

        fetchContacts(); // Call the function to fetch contacts when the component mounts
    }, []); // Empty dependency array means this runs once when the component mounts

    // Delete contact handler
    const deleteHandler = (id) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    // Edit contact handler
    const editHandler = (id, updatedContact) => {
        setContacts((prevContacts) =>
            prevContacts.map((contact) =>
                contact.id === id ? { ...contact, ...updatedContact } : contact
            )
        );
    };

    // Filtered contacts based on search term
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Router>
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Routes>
                <Route path="/contacts" element={<Contacts searchTerm={searchTerm} />} />
                <Route
                    path="/available-contacts"
                    element={
                        <AvailableContacts
                            contacts={filteredContacts} // Pass the filtered contacts
                            deleteHandler={deleteHandler}
                            editHandler={editHandler}
                        />
                    }
                />
                <Route path="/about" element={<About />} />
                <Route path="/" element={<WelcomePage />} />
            </Routes>
        </Router>
    );
}

export default App;