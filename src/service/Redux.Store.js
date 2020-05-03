import { createStore } from "redux";
import Reducer from "./Redux.Reducer";

let Store = {
    email: 'hub@oykos.me',
    firstName: 'Filip',
    lastName: 'Andjelic'
};

Store = createStore(Reducer, Store);

export default Store;