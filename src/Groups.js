import React, { useState } from 'react';
import './Groups.css';
import Navbar from './Navbar';

const GroupCard = ({ groupName, imageUrl, description }) => {
  const [joined, setJoined] = useState(false);

  const handleJoinGroup = () => {
    setJoined(true);
  };

  return (
    <>
   
    <div className="group-card">

      <img src={imageUrl} alt={`Group Icon for ${groupName}`} className="icon" />
      <div className="group-info">
        <h2>{groupName}</h2>
        <p>{description}</p>
      </div>

      {!joined ? (
        <button onClick={handleJoinGroup}>Join Group</button>
      ) : (
        <p>You have been added to this group!</p>
      )}
    </div>
    </>
  );
};

const Groups = () => {
  const groups = [
    {
      groupName: 'React Group',
      imageUrl: './images/gpicon.jpg',
      description: 'All the new joiniees are in this group...',
    },
    {
      groupName: 'New Group ',
      imageUrl: './images/gpicon.jpg',
      description: 'New Members are adding to this new group...',
    },
    {
      groupName: 'The Squad',
      imageUrl: './images/gpicon.jpg',
      description: 'The squad is ready to rock....',
    },
  ];

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className="app-container">
      {groups.map((group, index) => (
        <GroupCard
          key={index}
          groupName={group.groupName}
          imageUrl={group.imageUrl}
          description={group.description}
        />
      ))}
    </div>

    </>
  );
};

export default Groups;
