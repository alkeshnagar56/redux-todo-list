import { configureStore } from "@reduxjs/toolkit";
import reducertodo from './reducer'
const store = configureStore({
    reducer:{
        todo : reducertodo,
    }
})
export default store;