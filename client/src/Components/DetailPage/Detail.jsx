import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions } from "../../redux/actions/auctionsAction";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "../DetailPage/Detail.css";
import Gallery from "../Gallery/Gallery";

function Detail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
    // eslint-disable-next-line
  }, []);
  const auctions = useSelector((state) => state.auctionReducer.auctions);
  console.log(auctions);

  let { id } = useParams();

  const [auction, setAuction] = useState(null);
  useEffect(() => {
    setAuction(auctions.find((auction) => auction._id === id));
    // eslint-disable-next-line
  }, []);
  console.log(auction);

  return (
    <div>
      {auction !== null ? (
        <Fragment>
          <div className="gallery">
            {/* <img src={`/uploads/${auction.images[0]}`} alt="a" /> */}
            <Gallery auction={auction} />
          </div>
        </Fragment>
      ) : (
        <Spinner animation="border" variant="success" />
      )}
    </div>
  );
}

export default Detail;
