// const initialState = {
//     search: "",
//     status: "All",
//     priorities: [],
// };
// const filterSlice = (state = initialState, action) => {
//     switch (action.type) {
//         case "filters/searchFilterChange":
//             return {
//                 ...state,
//                 search: action.payload,
//             };
//         case "filters/statusFilterChange":
//             return {
//                 ...state,
//                 status: action.payload,
//             };
//         case "filters/priorityFilterChange":
//             return {
//                 ...state,
//                 priorities: action.payload,
//             };
//         default:
//             return state;
//     }
// };

// export default filterSlice;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: "filters",
    initialState: {
        search: "",
        status: "All",
        priorities: [],
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        statusFilterChange: (state, action) => {
            state.status = action.payload;
        },
        priorityFilterChange: (state, action) => {
            state.priorities = action.payload;
        },
    },
});
