import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ loggedInUser }) => {
  return (
    <nav>
      <div className="navbar-title">𝕀𝕟𝕤𝕥𝕒𝕓𝕠𝕠𝕜</div>

      <div className="navbar-links">
        <Link to="/post">Feed</Link>
        <Link to="/addpost">Add Post</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/groups">Groups</Link>
        <Link to="/photos">Photos</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/">Logout</Link>
      </div>

      <div className="logged-in-user">Welcome, Shiva</div>
    </nav>
  );
};

export default Navbar;