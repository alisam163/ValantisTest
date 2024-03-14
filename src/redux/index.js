import { configureStore } from "@reduxjs/toolkit";
import offsetReducer from './slices/offsetSlice'
import itemsReducer from "./slices/itemsSlice";
import limitReducer from './slices/limitSlice'
import pageReducer from './slices/pageSlice'
import filterReducer from './slices/filterSlice'

export default configureStore({
    reducer: {
        offset: offsetReducer,
        items: itemsReducer,
        limit: limitReducer,
        page: pageReducer,
        filter: filterReducer,
    }
})