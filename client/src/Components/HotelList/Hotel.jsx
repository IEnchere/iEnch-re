import React, { useEffect, Fragment } from "react";
import Navmenu from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions } from "../../redux/actions/auctionsAction";
import AuctionCard from "../AuctionCard/AuctionCard";
import "./Hotel.css";

function Hotel({ auction }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
    // eslint-disable-next-line
  }, []);

  const auctions = useSelector((state) => state.auctionReducer.auctions);

  return (
    <Fragment>
      <Navmenu />
      <div className="hotel">
        {auctions.map((auction) =>
          auction.category === "hotel et séjour" ? (
            <AuctionCard key={auction._id} auction={auction} />
          ) : null
        )}
      </div>
    </Fragment>
  );
}

export default Hotel;
