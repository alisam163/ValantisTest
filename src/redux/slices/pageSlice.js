import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1,
}

const pageSlice = createSlice({
    name: 'page', 
    initialState,
    reducers: {
        next: (state) => {
            state.value += 1
        },
        prev: (state) => {
            state.value -= 1
        }
    }
})

export const { next, prev } = pageSlice.actions

export default pageSlice.reducer