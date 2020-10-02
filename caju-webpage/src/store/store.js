import { createStore } from "redux";
import { counter } from "../reducers/reducers";

export const store = createStore(counter);
