import { createStore, combineReducers } from "redux";


import CategoryReducer from "./reducers/breads.reducer";
import BreadsReducer from "./reducers/breads.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadsReducer
});

export default createStore(RootReducer); 