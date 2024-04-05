import React, { useState } from 'react';
import { getNextImageIndex, getPrevImageIndex } from './utils'; // Import helper functions

export default function SiteBox({ name, description, images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage(getNextImageIndex(currentImage, images.length));
  };

  const handlePrevImage = () => {
    setCurrentImage(getPrevImageIndex(currentImage, images.length));
  };

  return (
    <div className="site-box">
      <div className="image-carousel">
        <img src={images[currentImage]} alt={name} />
        {images.length > 1 && (
          <div className="carousel-controls">
            <button onClick={handlePrevImage}>&#8592;</button>
            <button onClick={handleNextImage}>&#8594;</button>
          </div>
        )}
      </div>
      <div className="site-description">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
