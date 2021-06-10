import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  product: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const cartReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.INCREMENT_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.DECREMENT_PRODUCT:
      return {};
    default:
      return state;
  }
};
