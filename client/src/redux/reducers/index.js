import { combineReducers } from "redux";
import auctionReducer from "./auctionReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({ auctionReducer, userReducer });

export default rootReducer;
