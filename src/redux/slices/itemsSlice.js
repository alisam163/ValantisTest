import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    loading: false,
    ids: [],
}

const itemsSlice = createSlice({
    name: 'items', 
    initialState,
    reducers: {
        addItems: (state, action) => {
            state.value = action.payload
        },
        setIds: (state, action) => {
            state.ids = action.payload
        },
        onLoading: (state) => {
            state.loading = true
        },
        offLoading: (state) => {
            state.loading = false
        }
    }
})

export const { addItems, onLoading, offLoading, setIds } = itemsSlice.actions

export default itemsSlice.reducer