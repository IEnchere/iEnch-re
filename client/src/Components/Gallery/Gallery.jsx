import "./Gallery.css";

import React from "react";
import { Card } from "react-bootstrap";

function Gallery({ auction }) {
  return (
    <div className="gallery-container">
      <div className="bigImg">
        <Card style={{ width: "47rem" }}>
          <Card.Img
            id="big"
            variant="top"
            src={`/uploads/${auction.images[0]}`}
            alt="gallery"
          />
          <Card.Body>
            <Card.Text>Compteur</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="small-container">
        <img src={`/uploads/${auction.images[1]}`} alt="a" id="img" />
        <img src={`/uploads/${auction.images[1]}`} alt="a" id="img" />
        <img src={`/uploads/${auction.images[1]}`} alt="a" id="img" />
      </div>
    </div>
  );
}

export default Gallery;
