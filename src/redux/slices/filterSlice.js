import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "",
    text: "",
    inSelect: false,
    arrBrand: [],
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.value = action.payload
        },
        resetFilter: (state) => {
            state.value = state.initialState
            state.text = state.initialState
        },
        setText: (state, action) => {
            state.text = action.payload
        },
        onSelect: (state) => {
            state.inSelect = true
        },
        offSelect: (state) => {
            state.inSelect = false
        },
        setArrBrand: (state, action) => {
            state.arrBrand = action.payload
        },
    }
})

export const {setFilter, resetFilter, setText, onSelect, offSelect, setArrBrand} = filterSlice.actions

export default filterSlice.reducer