import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
  products: productsReducer,
  product: selectedProductsReducer,
});
export default reducers;
