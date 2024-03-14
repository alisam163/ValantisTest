import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 50,
}

const limitSlice = createSlice({
    name: 'limit',
    initialState, 
    reducers: {
        changeLimit: (state, action) => {
            state.value = action.payload
        },
        defaultLImit: (state) => {
            state.value = initialState
        }
    }
})

export const {changeLimit, defaultLImit } = limitSlice.actions

export default limitSlice.reducer