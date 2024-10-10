import React from "react";
import styles from "./Contacts.module.css";

const ContactsList = ({ contacts, deleteHandler, editHandler }) => {
    return (
        <div className={styles["table-container"]}>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td className={styles["table-actions"]}>
                                <button onClick={() => editHandler(contact.id)}>Edit</button>
                                <button onClick={() => deleteHandler(contact.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsList;