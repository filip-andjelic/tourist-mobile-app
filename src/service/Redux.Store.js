import { createStore } from "redux";
import Reducer from "./Redux.Reducer";

let store = {};

store = createStore(Reducer, {});

export default store;