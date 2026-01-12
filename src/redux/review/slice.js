import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchReview } from "../../service/review";

export const fetchReviewAsync = createAsyncThunk(
    "review/fetchReview",
    async () => {
        const response = await fetchReview();
        return response;
    }
);

const initialState = {
    data: [],
    error: "",
    isLoading: true,
};
export const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchReviewAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchReviewAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default reviewSlice.reducer;
