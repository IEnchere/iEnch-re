import React, { useEffect, Fragment } from "react";
import Navmenu from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions } from "../../redux/actions/auctionsAction";
import AuctionCard from "../AuctionCard/AuctionCard";
import "./Shopping.css";

function Shopping({ auction }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
    // eslint-disable-next-line
  }, []);

  const auctions = useSelector((state) => state.auctionReducer.auctions);
  console.log(auctions);
  return (
    <Fragment>
      <Navmenu />
      <div className="Shopping">
        {auctions.map((auction) =>
          auction.category === "Maison et Shopping" ? (
            <AuctionCard key={auction._id} auction={auction} />
          ) : null
        )}
      </div>
    </Fragment>
  );
}

export default Shopping;
