import { combineReducers } from "redux";
import items from "./items";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
  items,
  cart,
  filter
});
