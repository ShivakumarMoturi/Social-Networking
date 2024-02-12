import React from 'react';
import './Cardimage.css'; 
import Navbar from './Navbar';

const cardData = [
  {
    id: 1,
    image: './images/cover.jpg', 
  },
  {
    id: 2,
    image: './images/img2.jpg', 
  },
  {
    id: 3,
    image: './images/img3.jpg', 
  },
  {
    id: 4,
    image: './images/img4.jpg', 
  },
];

const Card = ({ title, image, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

const Photos = () => {
  return (
    <>
    <Navbar/>
    <div className="app">
      {cardData.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          image={card.image}
          description={card.description}
        />
      ))}
    </div>
    </>
  );
};

export default Photos;
