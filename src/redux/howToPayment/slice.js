import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchHowToPayment } from "../../service/howToPayment";

export const fetchHowToPaymentAsync = createAsyncThunk(
    "howToPayment/fetchHowToPayment",
    async () => {
        const response = await fetchHowToPayment();
        return response;
    }
);

const initialState = {
    data: [],
    error: "",
    isLoading: true,
};
export const howToPaymentSlice = createSlice({
    name: "howToPayment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHowToPaymentAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchHowToPaymentAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchHowToPaymentAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default howToPaymentSlice.reducer;
