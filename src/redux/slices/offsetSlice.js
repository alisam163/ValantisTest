import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}

const offsetSlice = createSlice({
    name: 'offset',
    initialState, 
    reducers: {
        increment: (state) => {
            state.value += 50;
        },
        decrement: (state) => {
            state.value -= 50;
        },
    },
})

export const { increment, decrement } = offsetSlice.actions

export default offsetSlice.reducer