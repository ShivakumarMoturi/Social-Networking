import React, { useState } from 'react';
import './Addpost.css'
import Navbar from './Navbar';

const Addpost = () => {
  const [image, setImage] = useState(null);
  const [imageData, setImageData] = useState('');
  const [description, setDescription] = useState('');
  const [displayedImages, setDisplayedImages] = useState([]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = (event) => {
        setImage(event.target.result);
      };

      reader.readAsDataURL(selectedImage);
    }
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddImage = () => {
    if (image && description) {
      const newImage = { image, description };
      setDisplayedImages([...displayedImages, newImage]);
      setImage(null);
      setDescription('');
    }
  };

  return (
    <>
    <div>
        <Navbar />
    </div>
    <div className="img"> 
      <div className="input-group">
        <input type="file" onChange={handleImageChange} />
        <textarea
          placeholder="Enter description..."
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <button onClick={handleAddImage}>Add Image</button>

      <div className="image-container">
        {displayedImages.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.description} />
            <p className='add-post'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Addpost;
