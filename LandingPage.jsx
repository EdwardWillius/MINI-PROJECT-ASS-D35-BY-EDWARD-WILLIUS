import React from 'react';
import './LandingPage.css'; // Import the CSS for styling

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Our Application</h1>
        <p>Your one-stop solution for managing users effectively.</p>
        <button onClick={onGetStarted} className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>User Registration and Login</li>
          <li>View User List</li>
          <li>User Details</li>
        </ul>
      </section>
      <footer className="landing-footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;