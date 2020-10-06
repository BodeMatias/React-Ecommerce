import { createStore } from "redux";
import { cart_reducer } from "../reducers/reducers";

export const store = createStore(cart_reducer);
