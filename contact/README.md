# Contact App

<img src="https://user-images.githubusercontent.com/74038190/212257467-871d32b7-e401-42e8-a166-fcfd7baa4c6b.gif" width="100">

This project is a simple contact management application built using React.js and Vite. Users can add, view, and delete their contacts. The application features a straightforward and user-friendly interface that allows users to easily manage their data.

<h3><a href="https://contact-app-sage.vercel.app/">View Contact App</a></h3>

## Features

- **Add Contact**: Users can enter the first name, last name, email, and phone number of a new contact and add it to the contact list.
- **Delete Contact**: Users can remove any contact from the list.
- **Display Contact List**: The application displays a list of all contacts and shows an appropriate message if there are no contacts.

## Project Structure

The project consists of several files and folders as follows:

- `src/`
  - `App.jsx`: The main component of the application that includes the header and the contact list.
  - `main.jsx`: The entry point of the application.
  - `components/`
    - `Header.jsx`: The header component that displays the application title.
    - `Contacts.jsx`: The component for managing contacts, which includes the form for adding a contact and the list of contacts.
    - `ContactItem.jsx`: The component that displays an individual contact.
    - `ContactsList.jsx`: The component that displays the list of contacts.
  - `constants/`
    - `inputs.js`: Contains input information for the add contact form.
  - `global.css`: General styles for the application.

## Installation and Setup

To set up this project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/keihanaf/Contact_App.git
   cd Contact_App
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the application**:
   ```bash
   npm run dev
   ```

4. **Access the application**: 
   Open your browser and go to `http://localhost:3000`.

## Usage

- To add a contact, fill in the required information in the form and click the "Add Contact" button.
- To delete a contact, click the trash can button next to the contact's name.

## Technologies

- **React.js**: For building the user interface.
- **Vite**: For fast development and build processes.
- **UUID**: For generating unique identifiers for each contact.
- **CSS Modules**: For styling the components.

## Contributing

If you would like to contribute to this project, please create a fork of the repository and submit a pull request.

## Languages and Tools

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,javascript,vite,css,vscode" />
  </a>
</p>

## License

This project is licensed under the MIT License.
