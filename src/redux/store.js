// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "@redux-devtools/extension";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

// Tool kit
import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
    reducer: {
        filters: filterSlice.reducer,
        todoList: todoSlice.reducer,
    },
});

export default store;
