import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "./modules/counter";
import users from "./modules/users";


// ASIS : 일반 리듀서
// const rootReducer = combineReducers({
//     counter,
//     users,
// });

// const store = createStore(rootReducer);

// TODO : REDUX Toolkit
const store = configureStore({
    reducer: {
        counter: counter,
    }
});

export default store;