const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
const CONTACTS_FILE = path.join(__dirname, "contacts.json"); // Adjust the path as necessary

app.use(cors());
app.use(bodyParser.json());

// Function to read contacts from contacts.json
const readContacts = () => {
    if (!fs.existsSync(CONTACTS_FILE)) {
        fs.writeFileSync(CONTACTS_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(CONTACTS_FILE);
    return JSON.parse(data);
};

// Function to save contacts to contacts.json
const saveContacts = (contacts) => {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
};

// GET all contacts
app.get("/api/contacts", (req, res) => {
    const contacts = readContacts();
    res.json(contacts);
});

// POST a new contact
app.post("/api/contacts", (req, res) => {
    const contacts = readContacts();
    const newContact = { id: req.body.id, ...req.body }; // Using id from the request body
    contacts.push(newContact);
    saveContacts(contacts);
    res.status(201).json(newContact);
});

// PUT update a contact by id
app.put("/api/contacts/:id", (req, res) => {
    const contacts = readContacts();
    const index = contacts.findIndex((contact) => contact.id === req.params.id);
    if (index !== -1) {
        contacts[index] = { id: req.params.id, ...req.body };
        saveContacts(contacts);
        res.json(contacts[index]);
    } else {
        res.status(404).send("Contact not found");
    }
});

// DELETE a contact by id
app.delete("/api/contacts/:id", (req, res) => {
    const contacts = readContacts();
    const filteredContacts = contacts.filter((contact) => contact.id !== req.params.id);
    if (contacts.length !== filteredContacts.length) {
        saveContacts(filteredContacts);
        res.status(204).send();
    } else {
        res.status(404).send("Contact not found");
    }
});

// Default route to handle 404
app.get("/", (req, res) => {
    const contacts = readContacts();
    res.json(contacts);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
