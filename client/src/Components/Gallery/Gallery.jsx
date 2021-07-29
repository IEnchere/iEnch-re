import React, { useEffect, Fragment } from "react";
import Navmenu from "../NavBar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAuctions } from "../../redux/actions/auctionsAction";
import AuctionCard from "../AuctionCard/AuctionCard";
import "./Gallery.css";

function Gallery() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAuctions());
    // eslint-disable-next-line
  }, []);

  const auctions = useSelector((state) => state.auctionReducer.auctions);
  console.log(auctions);
  return <Fragment></Fragment>;
}

export default Gallery;
