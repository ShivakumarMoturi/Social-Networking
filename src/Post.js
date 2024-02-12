import React, { useState } from 'react';
import './Post.css';
import Navbar from './Navbar';
import { toast } from 'react-toastify';

const UserCard = ({ icon, name, photo, post, description, onButtonClick }) => {
  const [comment, setComment] = useState('');
  const [savedComments, setSavedComments] = useState([]);

  const handleSaveComment = () => {
    const newComment = {
      userName: name,
      userComment: comment,
    };

    setSavedComments((prevComments) => [...prevComments, newComment]);
    setComment('');
  };

  return (
    <>

      <div className="user-container">
        <div className="user-header">
          <div className="user-avatar">
            <img src={photo} alt={name} className="user-photo" />
            <div className="user-icon">{icon}</div>
          </div>
          <div className="user-info">
            <div className="user-name">{name}</div>
            <img src={post} alt='Post' className="user-image" />
          </div>
        </div>
        <div className="post-box">
          <div className="user-card">
            <div className="user-description">
              <p className='post'>{description}</p>
            </div>
            <div className="user-actions">
              <button id="like" onClick={onButtonClick}>LIKE</button>
              <input
                type="text"
                placeholder="Enter your comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            <button id="comment" onClick={handleSaveComment}> <strong>Comment</strong> </button>
            </div>
          </div>
          {savedComments.length > 0 && (
            <div className="display-comments">
              <p>Saved Comments:</p>
              {savedComments.map((savedComment, index) => (
                <p key={index}>{`${savedComment.userName='shiva'}: ${savedComment.userComment}`}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const Post = () => {
  const handleButtonClick = (displayText) => {
    console.log(displayText);
    toast.success('You liked this post')
  };

  return (
    <>
    
         <div>
      <Navbar></Navbar>
    </div>
      <div className="app-container">
        <UserCard
          icon={<i className="fa fa-user-circle" />} 
          name="Akula Ravinder"
          photo="../images/ravi2.jpg"
          post="../images/kohli.jpg"
          description="JAHA MATTER BADA HOTA HAI 
          VAHA KING KOHLI KADA HOTA HAI "
          onButtonClick={handleButtonClick}
        />
        <div className="app-container">
          <UserCard
            icon={<i className="fa fa-user-circle" />}
            name="Kotesh Sakinala"
            photo="../images/unknown.jpg"
            post="../images/REVANTH.jpg"
            description="INDIAN NATIONAL CONGRESS FREE'S PEOPLE FROM KILLER GOVERNMENT"
            onButtonClick={handleButtonClick}
          />
        </div>
        <div className="app-container">
          <UserCard
            icon={<i className="fa fa-user-circle" />} 
            name="Rahul Mahankali"
            photo="../images/rahul.jpg"
            post="../images/SALAR2.jpg"
            description="SALAR TEASER BECOMES WORLD'S FASTEST 20 MILLION SEEN IN JUST 22 MINUTES "
            onButtonClick={handleButtonClick}
          />
          <UserCard
              icon={<i className="fa fa-user-circle" />}
              name="New User"
              photo="../images/p1.jpg"
              post="./images/p2.jpg" 
              description="This is Quarterly Revenue of CG Groups"
              onButtonClick={handleButtonClick}
            />
        </div>
      </div>
    </>
  );
};

export default Post;