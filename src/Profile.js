// Profile.js

import React from 'react';
import './Profile.css';
import Navbar from './Navbar';

const Profile = () => {
  const user = {
    name: 'Moturi Shivakumar',
    profilePicture: './images/shiva.jpg',
    bannerPicture: './images/cover2.jpg',
    bio: '“Remember that happiness is a way of travel – not a destination.”',
    phone: '9876543210',
    email: 'Shivakumar@gmail.com',
    about: 'I am a software developer with a passion for coding.',
    qualifications: 'Bachelor of Electronics and Communication',
    location: 'Hyderabad, Telangana',
  };

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="banner-picture">
          <img src={user.bannerPicture} alt="Banner" />
          <div className="profile-icon">
            <img src={user.profilePicture} alt="Profile Icon" />
          </div>
        </div>

        <div className="profile-info">
          <h1>{user.name}</h1>
          <p className='profile'>{user.bio}</p>

          <div className="user-details">
            <div>
              <strong>Phone:</strong> {user.phone}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>About:</strong> {user.about}
            </div>
            <div>
              <strong>Qualifications:</strong> {user.qualifications}
            </div>
            <div>
              <strong>Location:</strong> {user.location}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
