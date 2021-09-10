import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducers

import { getIdeasReducer } from "./reducers/ideaReducers";
import { cartReducer } from "./reducers/cartReducers";
import {getCollectionsReducer } from "./reducers/LandingReducer";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";
import AuthReducer from "./reducers/authReducer";
const reducer = combineReducers
({
  collections:getCollectionsReducer,
  auth:AuthReducer,
  getIdeas:getIdeasReducer, 
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
