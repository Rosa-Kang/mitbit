import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      category: "Food",
      link: "food",
      id: "vvv0",
      name: "Grilled Chicken Burger",
      image: "../images/burger0.png",
      price: "$ 8.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv1",
      name: "Grilled Mit Burger",
      image: "../images/burger1.png",
      price: "$ 8.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv2",
      name: "Grilled Veggie Burger",
      image: "../images/burger4.png",
      price: "$ 8.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv3",
      name: "Grilled Double Mit Burger",
      image: "../images/burger5.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Side/Drink",
      link: "",
      id: "vvv4",
      name: "Grilled Double Mit Burger",
      image: "../images/drink0.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Combo",
      link: "",
      id: "vvv5",
      name: "Time Burger Combo",
      image: "../images/combo1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv6",
      name: "Grilled Double Mit Burger",
      image: "../images/burger2.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Side/Drink",
      link: "",
      id: "vvv7",
      name: "Grilled Double Mit Burger",
      image: "../images/drink1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Combo",
      link: "",
      id: "vvv8",
      name: "Garden Burger Combo",
      image: "../images/combo2.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Side/Drink",
      link: "",
      id: "vvv9",
      name: "Grilled Double Mit Burger",
      image: "../images/drink2.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Combo",
      link: "",
      id: "vvv10",
      name: "Avocado and Bacon Combo",
      image: "../images/combo3.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Main",
      link: "",
      id: "vvv11",
      name: "Grilled Double Mit Burger",
      image: "../images/burger6.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Main",
      link: "",
      id: "vvv12",
      name: "Double Mit Burger",
      image: "../images/burger3.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Appetizer",
      link: "",
      id: "vvv13",
      name: "Western Burger",
      image: "../images/western.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Dessert",
      link: "",
      id: "vvv14",
      name: "Dessert",
      image: "../images/dessert1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "kids",
      link: "",
      id: "vvv15",
      name: "For Kids",
      image: "../images/kids.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Extra",
      link: "",
      id: "vvv16",
      name: "Poutine",
      image: "../images/extra.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Happy Hours",
      link: "",
      id: "vvv17",
      name: "Grilled Double Mit Burger",
      image: "../images/happyhour1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Main",
      link: "",
      id: "vvv18",
      name: "Grilled Double Mit Burger",
      image: "../images/burger6.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Main",
      link: "",
      id: "vvv19",
      name: "Double Mit Burger",
      image: "../images/burger3.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Appetizer",
      link: "",
      id: "vvv20",
      name: "Western Burger",
      image: "../images/western.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Dessert",
      link: "",
      id: "vvv21",
      name: "Dessert",
      image: "../images/dessert1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "kids",
      link: "",
      id: "vvv22",
      name: "For Kids",
      image: "../images/kids.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Side/Drink",
      link: "",
      id: "vvv23",
      name: "Grilled Double Mit Burger",
      image: "../images/drink0.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Combo",
      link: "",
      id: "vvv24",
      name: "Time Burger Combo",
      image: "../images/combo1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv25",
      name: "Grilled Double Mit Burger",
      image: "../images/burger2.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Side/Drink",
      link: "",
      id: "vvv26",
      name: "Grilled Double Mit Burger",
      image: "../images/drink1.png",
      price: "$ 11.99",
      count: { type: "Number", default: 0 },
    },
    {
      category: "Food",
      link: "",
      id: "vvv27",
      name: "Grilled Mit Burger",
      image: "../images/burger1.png",
      price: "$ 8.99",
      count: { type: "Number", default: 0 },
    },
  ],
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
