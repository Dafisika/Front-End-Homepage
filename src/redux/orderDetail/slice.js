import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    fetchOrderDetail,
    fetchOrderDetailById,
} from "../../service/orderDetail";

export const fetchOrderDetailAsync = createAsyncThunk(
    "orderDetail/fetchOrderDetail",
    async () => {
        const response = await fetchOrderDetail();
        return response;
    }
);
export const fetchOrderDetailByIdAsync = createAsyncThunk(
    "orderDetail/fetchOrderDetailById",
    async () => {
        const response = await fetchOrderDetailById();
        return response;
    }
);

const initialState = {
    data: [],
    detail: {},
    error: "",
    isLoading: true,
};
export const orderDetailSlice = createSlice({
    name: "orderDetail",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrderDetailAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOrderDetailAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchOrderDetailAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(fetchOrderDetailByIdAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchOrderDetailByIdAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.detail = action.payload;
            })
            .addCase(fetchOrderDetailByIdAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default orderDetailSlice.reducer;
