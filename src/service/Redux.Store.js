import { createStore } from "redux";
import Reducer from "./Redux.Reducer";

let Store = {
    email: '',
    firstName: '',
    lastName: ''
};

Store = createStore(Reducer, Store);

export default Store;