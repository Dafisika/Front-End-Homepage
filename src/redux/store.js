import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./article/slice";
import orderDetailReducer from "./orderDetail/slice";
import classReducer from "./class/slice";

export default configureStore({
    reducer: {
        article: articleReducer,
        orderDetail: orderDetailReducer,
        class: classReducer,
    },
});
