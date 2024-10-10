import React from 'react';
import styles from "./Contacts.module.css";

function ContactItem({ data: { id, name, lastName, email, phone }, deleteHandler, editHandler }) {
    return (
        <li className={styles.card}>
            <p>{name} {lastName}</p>
            <p>
                <span>📬</span>
                {email}
            </p>
            <p>
                <span>📞</span>
                {phone}
            </p>
            <div className={styles.buttons}>
                <button onClick={() => editHandler(id)}>✏️ Edit</button>
                <button onClick={() => deleteHandler(id)}>🗑️ Delete</button>
            </div>
        </li>
    );
}

export default ContactItem;