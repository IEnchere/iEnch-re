import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import "./Gallery.css";

function Gallery({ auction }) {
  const [current, setCurrent] = useState(0);
  const length = auction.images.length;

  if (!Array.isArray(auction.images) || auction.images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />

      {auction.images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={`/uploads/${auction.images[index]}`}
                alt="a"
                className="image"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
