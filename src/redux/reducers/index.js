import { combineReducers } from "redux";
import { productsReducer, cartReducer } from "./productsReducer";
const reducers = combineReducers({
  products: productsReducer,
  product: cartReducer,
});
export default reducers;
