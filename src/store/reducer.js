import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
    name: "todoState",
    initialState: {
        tasks : [],
    },
    reducers: {
        addTask: (state, action) => 
            {state.tasks = pushedArray(Array.from(state.tasks), action.payload)},
    },
});

function pushedArray(arr, el) {
    arr.push(el);
    return arr;
}

export const {
    addTask,
} = tasksSlice.actions

export default tasksSlice.reducer