import React from "react";
import { Card } from "react-bootstrap";
import "./AuctionCard.css";
import { Link } from "react-router-dom";

function AuctionCard({ auction }) {
  return (
    <div className="Card-Container">
      <Card style={{ width: "22rem" }}>
        <Link to={`/Detail/${auction.id}`}>
          <Card.Img
            className="img-container"
            variant="top"
            src={`/uploads/${auction.imageCover}`}
          />
        </Link>
        <Card.Body>
          <Card.Title>{auction.title} </Card.Title>
          <Card.Text className="description-container">
            {auction.startingPrice}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AuctionCard;

// import React from "react";
// import { Card } from "antd";

// function AuctionCard({ auction }) {
//   return (
//     <div>
//       <Card
//         hoverable
//         style={{ width: 240 }}
//         cover={<img alt=" couverture" src={auction.imageCover} />}
//       >
//         <p>{auction.title}</p>
//       </Card>
//     </div>
//   );
// }

// export default AuctionCard;
