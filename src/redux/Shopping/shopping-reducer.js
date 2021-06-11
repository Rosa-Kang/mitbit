import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      category: "Food",
      id: "vvv0",
      name: "Grilled Chicken Burger",
      image: "../images/burger0.png",
      price: 8.99,
    },
    {
      category: "Food",
      id: "vvv1",
      name: "Grilled Mit Burger",
      image: "../images/burger1.png",
      price: 8.99,
    },
    {
      category: "Food",
      id: "vvv2",
      name: "Grilled Veggie Burger",
      image: "../images/burger4.png",
      price: 8.99,
    },
    {
      category: "Food",

      id: "vvv3",
      name: "Grilled Double Mit Burger",
      image: "../images/burger5.png",
      price: 11.99,
    },
    {
      category: "Side/Drink",

      id: "vvv4",
      name: "Grilled Double Mit Burger",
      image: "../images/drink0.png",
      price: 11.99,
    },
    {
      category: "Combo",

      id: "vvv5",
      name: "Time Burger Combo",
      image: "../images/combo1.png",
      price: 11.99,
    },
    {
      category: "Food",

      id: "vvv6",
      name: "Grilled Double Mit Burger",
      image: "../images/burger2.png",
      price: 11.99,
    },
    {
      category: "Side/Drink",

      id: "vvv7",
      name: "Grilled Double Mit Burger",
      image: "../images/drink1.png",
      price: 11.99,
    },
    {
      category: "Combo",

      id: "vvv8",
      name: "Garden Burger Combo",
      image: "../images/combo2.png",
      price: 11.99,
    },
    {
      category: "Side/Drink",

      id: "vvv9",
      name: "Grilled Double Mit Burger",
      image: "../images/drink2.png",
      price: 11.99,
    },
    {
      category: "Combo",

      id: "vvv10",
      name: "Avocado and Bacon Combo",
      image: "../images/combo3.png",
      price: 11.99,
    },
    {
      category: "Main",

      id: "vvv11",
      name: "Grilled Double Mit Burger",
      image: "../images/burger6.png",
      price: 11.99,
    },
    {
      category: "Main",

      id: "vvv12",
      name: "Double Mit Burger",
      image: "../images/burger3.png",
      price: 11.99,
    },
    {
      category: "Appetizer",

      id: "vvv13",
      name: "Western Burger",
      image: "../images/western.png",
      price: 11.99,
    },
    {
      category: "Dessert",

      id: "vvv14",
      name: "Dessert",
      image: "../images/dessert1.png",
      price: 11.99,
    },
    {
      category: "kids",

      id: "vvv15",
      name: "For Kids",
      image: "../images/kids.png",
      price: 11.99,
    },
    {
      category: "Extra",

      id: "vvv16",
      name: "Poutine",
      image: "../images/extra.png",
      price: 11.99,
    },
    {
      category: "Happy Hours",

      id: "vvv17",
      name: "Grilled Double Mit Burger",
      image: "../images/happyhour1.png",
      price: 11.99,
    },
    {
      category: "Main",

      id: "vvv18",
      name: "Grilled Double Mit Burger",
      image: "../images/burger6.png",
      price: 11.99,
    },
    {
      category: "Main",

      id: "vvv19",
      name: "Double Mit Burger",
      image: "../images/burger3.png",
      price: 11.99,
    },
    {
      category: "Appetizer",

      id: "vvv20",
      name: "Western Burger",
      image: "../images/western.png",
      price: 11.99,
    },
    {
      category: "Dessert",

      id: "vvv21",
      name: "Dessert",
      image: "../images/dessert1.png",
      price: 11.99,
    },
    {
      category: "kids",

      id: "vvv22",
      name: "For Kids",
      image: "../images/kids.png",
      price: 11.99,
    },
    {
      category: "Side/Drink",

      id: "vvv23",
      name: "Grilled Double Mit Burger",
      image: "../images/drink0.png",
      price: 11.99,
    },
    {
      category: "Combo",

      id: "vvv24",
      name: "Time Burger Combo",
      image: "../images/combo1.png",
      price: 11.99,
    },
    {
      category: "Food",

      id: "vvv25",
      name: "Grilled Double Mit Burger",
      image: "../images/burger2.png",
      price: 11.99,
    },
    {
      category: "Side/Drink",

      id: "vvv26",
      name: "Grilled Double Mit Burger",
      image: "../images/drink1.png",
      price: 11.99,
    },
    {
      category: "Food",

      id: "vvv27",
      name: "Grilled Mit Burger",
      image: "../images/burger1.png",
      price: 8.99,
    },
    {
      category: "Side/Drink",

      id: "vvv28",
      name: "Grilled Double Mit Burger",
      image: "../images/drink1.png",
      price: 8.99,
    },
    {
      category: "Combo",

      id: "vvv29",
      name: "Garden Burger Combo",
      image: "../images/combo2.png",
      price: 11.99,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array

      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    qty: item.qty + 1,
                    cost: item.price * (item.qty + 1),
                  }
                : item
            )
          : [
              ...state.cart,
              {
                ...item,
                qty: 1,
                cost: item.price * 1,
              },
            ],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
