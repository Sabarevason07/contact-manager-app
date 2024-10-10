import React from "react";
import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles.container}>
            <h1>About Contact Manager</h1>
            <p>
                Welcome to the Contact Manager application, a simple and efficient tool designed to help you manage your contacts with ease. Whether you need to store personal or professional contacts, our app provides a user-friendly interface to keep your information organized and accessible.
            </p>

            <p>
                One of the key features of the Contact Manager is the ability to create new contacts swiftly. By filling in essential details such as name, phone number, and email address, you can quickly add individuals to your contact list. Once your contacts are saved, you can easily view them in a clean and organized layout, making it simple to find what you need. The app also allows you to edit existing contacts, ensuring that all information remains current and accurate. If a contact is no longer needed, you can remove it with a single click, simplifying your contact management process. 
            </p>

            <p>
                The application includes a search functionality, enabling you to find specific contacts quickly. This feature saves you time and effort, especially as your list grows. To get started, simply click on the "Create Contact" button in the sidebar and fill out the required fields in the form to save your contact. After saving, navigate to the "View Contacts" section to see your list of saved contacts. You can easily update any details as needed using the edit option next to each contact, or remove a contact with the delete button adjacent to it.
            </p>

            <p>
                This application is built using React for the frontend and employs modern libraries and technologies to ensure a smooth user experience. Key technologies include CSS Modules for styling, React Router for seamless navigation, and JavaScript ES6+ features for a more efficient codebase. 
            </p>

            <p>
                We are continuously working on improving the Contact Manager application, with future updates aimed at enhancing user experience. Planned enhancements include improved search filters to make finding contacts even easier, as well as export and import functionalities for managing your contacts more effectively. We also aim to enhance mobile responsiveness, ensuring a better user experience on smaller screens.
            </p>

            <p>
                Your feedback is incredibly valuable to us! If you have any suggestions or encounter issues while using the app, please feel free to reach out. Your input helps us improve the application and provide a better experience for all users. Thank you for using the Contact Manager application!
            </p>
        </div>
    );
};

export default About;
