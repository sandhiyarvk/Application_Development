import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';

const Profile = () => {
  const name = sessionStorage.getItem('name') || 'User';
  const email = sessionStorage.getItem('email') || 'user@example.com';
  const booksBought = ["To Kill a Mockingbird by Harper Lee", "1984 by George Orwell", "Harry Potter and the Sorcerer's Stone by J.K. Rowling"];
  const booksInCart = ["The Great Gatsby by F. Scott Fitzgerald", "The Catcher in the Rye by J.D. Salinger"];
  const interestedFields = ["Fiction", "Fantasy", "Classics"];

  const handleLogout = () => {
    sessionStorage.clear();
    console.log("Logged out");
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7-znINlBW7IOYBFMMQn1Fr5fiaXn81M1w5w&s" alt={name} className="profile-avatar" />
          <div className="profile-name-email">
            <h2 className="profile-name">{name}</h2>
       
          </div>
        </div>
        <div className="profile-details">
          <h3 className="profile-section-title">Books Bought</h3>
          <ul className="profile-list">
            {booksBought.map((book, index) => (
              <li key={index} className="profile-list-item">{book}</li>
            ))}
          </ul>
          <h3 className="profile-section-title">Books in Cart</h3>
          <ul className="profile-list">
            {booksInCart.map((book, index) => (
              <li key={index} className="profile-list-item">{book}</li>
            ))}
          </ul>
          <h3 className="profile-section-title">Interested Fields</h3>
          <ul className="profile-list">
            {interestedFields.map((field, index) => (
              <li key={index} className="profile-list-item">{field}</li>
            ))}
          </ul>
        </div>
        <button className="logout-button" onClick={handleLogout}>
       <Link to="/signup">
        Logout
       </Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;