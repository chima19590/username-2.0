import React from 'react';
import './UserCard.css';  // Optional: Import a separate CSS file for styling

// UserCard component accepting props
const UserCard = ({ name, avatar, email, location }) => {
  return (
    <div className="user-card">
      <img className="avatar" src={avatar} alt={`${name}'s avatar`} />
      <h2 className="user-name">{name}</h2>
      <p className="user-email">{email}</p>
      <p className="user-location">{location}</p>
    </div>
  );
};

export default UserCard;
