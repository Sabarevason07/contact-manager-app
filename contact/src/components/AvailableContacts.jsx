import React, { useState } from "react";
import "./AvailableContacts.css"; // Custom CSS file for styling

const AvailableContacts = ({ contacts, deleteHandler, editHandler }) => {
    const [editId, setEditId] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: "",
        phone: "",
    });

    const handleEditClick = (contact) => {
        setEditId(contact.id);
        setEditFormData({
            name: contact.name,
            phone: contact.phone,
        });
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSaveClick = (contactId) => {
        editHandler(contactId, editFormData);
        setEditId(null); // Exit edit mode after saving
    };

    return (
        <div className="available-contacts">
            <h1>Available Contacts</h1>
            <table className="contacts-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            {editId === contact.id ? (
                                <>
                                    <td>
                                        <input
                                            type="text"
                                            name="name"
                                            value={editFormData.name}
                                            onChange={handleEditChange}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={editFormData.phone}
                                            onChange={handleEditChange}
                                        />
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleSaveClick(contact.id)}
                                        >
                                            Save
                                        </button>
                                        <button onClick={() => setEditId(null)}>Cancel</button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td>{contact.name}</td>
                                    <td>{contact.phone}</td>
                                    <td>
                                        <button onClick={() => handleEditClick(contact)}>Edit</button>
                                        <button onClick={() => deleteHandler(contact.id)}>Delete</button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AvailableContacts;