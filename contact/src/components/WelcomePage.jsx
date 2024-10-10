import React from "react";
import "./WelcomePage.css"; // Import the CSS for the welcome page

const WelcomePage = () => {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <h1>Welcome to the Contact Manager!</h1>
                <img
                    src="https://i.pinimg.com/originals/e7/78/2b/e7782b954b20ab768c74fc1dfd6f9377.gif" // You can replace this with your own loading GIF URL
                    alt="Loading..."
                    className="loading-gif"
                />
                <p>Managing your contacts has never been easier!</p>
            </div>
        </div>
    );
};

export default WelcomePage;