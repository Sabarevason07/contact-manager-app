// src/components/Contacts.jsx
import { useEffect, useState } from "react";
import ContactsList from "./ContactsList.jsx";
import inputs from "../constants/inputs.js";
import axios from "axios"; // Import axios
import { v4 } from "uuid";
import styles from "./Contacts.module.css";
import SearchBar from "./SearchBar"; // Import the new SearchBar component


const API_URL = 'http://localhost:5000/api/contacts'; // Your API endpoint

function Contacts() {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastName: "",
        email: "",
        phone: "",
    });
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [alerts, setAlerts] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await axios.get(API_URL);
                setContacts(response.data);
                setFilteredContacts(response.data);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            }
        };
        fetchContacts();
    }, []);

    useEffect(() => {
        const filtered = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.phone.includes(searchTerm)
        );
        setFilteredContacts(filtered);
    }, [searchTerm, contacts]);

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact((contact) => ({ ...contact, [name]: value }));
    };

    const addHandler = async () => {
        if (!contact.name || !contact.lastName || !contact.phone || !contact.email) {
            setAlerts("Please enter valid data");
            return;
        }
        setAlerts("");

        if (editMode) {
            try {
                const response = await axios.put(`${API_URL}/${editingId}`, contact);
                setContacts((contacts) => 
                    contacts.map((c) => (c.id === editingId ? response.data : c))
                );
                setEditMode(false);
            } catch (error) {
                console.error("Error updating contact:", error);
            }
        } else {
            try {
                const response = await axios.post(API_URL, { ...contact, id: v4() });
                setContacts((contacts) => [...contacts, response.data]);
            } catch (error) {
                console.error("Error adding contact:", error);
            }
        }

        resetForm();
    };

    const editHandler = (id) => {
        const contactToEdit = contacts.find((c) => c.id === id);
        setContact(contactToEdit);
        setEditingId(id);
        setEditMode(true);
    };

    const deleteHandler = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setContacts((contacts) => contacts.filter((contact) => contact.id !== id));
        } catch (error) {
            console.error("Error deleting contact:", error);
        }
    };

    const resetForm = () => {
        setContact({
            name: "",
            lastName: "",
            email: "",
            phone: "",
        });
        setEditMode(false);
        setEditingId(null);
    };

    return (
        
        <div className={styles.container}>
            
            <div className={styles.form}>
             
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.name}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changeHandler}
                    />
                ))}
                <button onClick={addHandler}>
                    {editMode ? "Update Contact" : "Add Contact"}
                </button>
                {editMode && <button onClick={resetForm}>Cancel Edit</button>}
            </div>
            <div className={styles.alert}>
                {alerts && <p>{alerts}</p>}
            </div>

           
           
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <ContactsList 
            
                contacts={filteredContacts} 
                deleteHandler={deleteHandler} 
                editHandler={editHandler} 
            />
        </div>
    );
}

export default Contacts;