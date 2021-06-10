import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
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
  switch (type) {
    case ActionTypes.INCREMENT_PRODUCT:
      const item = state.products.find((prod) => prod.id === payload.id);
      return console.log(item);
    case ActionTypes.DECREMENT_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};
