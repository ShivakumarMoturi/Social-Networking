import React, { useState } from 'react';
import './Friends.css';
import Navbar from './Navbar';

const Friends = () => {
  const [friendRequests, setFriendRequests] = useState([
    { id: 1, name: 'Prakash', picture: './images/prakash.jpg' },
    { id: 2, name: 'Manikanta', picture: './images/manikanta.jpg' },
    { id: 3, name: 'Gnanesh', picture: './images/gnanesh.jpg' },
    { id: 4, name: 'SMD Sameer', picture: './images/sameer.jpg' },
    { id: 5, name: 'Krishna', picture: './images/man.jpg' },
    { id: 6, name: 'Harish', picture: './images/man.jpg' },
    { id: 7, name: 'Rani', picture: './images/man.jpg' },
    { id: 8, name: 'Prathiba', picture: './images/man.jpg' },
  ]);

  const [friends, setFriends] = useState([
    { id: 1, name: 'Akula Ravinder', picture: './images/ravi2.jpg' },
    { id: 2, name: 'Kotesh Sakinala', picture: './images/unknown.jpg' },
    { id: 3, name: 'Rahul Mahankali', picture: './images/rahul.jpg' },
  ]);

  const handleAcceptRequest = (id) => {
    const requestedFriend = friendRequests.find((friend) => friend.id === id);

    setFriendRequests((prevRequests) =>
      prevRequests.filter((friend) => friend.id !== id)
    );

    setFriends((prevFriends) => [...prevFriends, requestedFriend]);
  };

  const handleRejectRequest = (id) => {
    setFriendRequests((prevRequests) =>
      prevRequests.filter((friend) => friend.id !== id)
    );
  };

  const handleDeleteFriend = (id) => {
    setFriends((prevFriends) => prevFriends.filter((friend) => friend.id !== id));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="friend-request-container">
        <div className="friend-request-column">
          <h2>Friend Requests</h2>
          <ul>
            {friendRequests.map((friend) => (
              <li key={friend.id}>
                <img
                  src={friend.picture}
                  alt={`${friend.name}'s profile`}
                  className="profile-picture"
                />
                <span>{friend.name}</span>
                <button onClick={() => handleAcceptRequest(friend.id)}>
                  Accept
                </button>
                <button onClick={() => handleRejectRequest(friend.id)}>
                  Reject
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="friend-accepted-column">
          <h2>Accepted Friends</h2>
          <ul>
            {friends.map((friend) => (
              <li key={friend.id}>
                <img
                  src={friend.picture}
                  alt={`${friend.name}'s profile`}
                  className="profile-picture"
                />
                <span>{friend.name}</span>
                <button onClick={() => handleDeleteFriend(friend.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Friends;

