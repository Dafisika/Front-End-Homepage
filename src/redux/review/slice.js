import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createReview } from "../../service/review";

export const postReviewAsync = createAsyncThunk(
    "review/fetchReview",
    async (data) => {
        const response = await createReview(data);
        return response;
    }
);

const initialState = {
    data: [],
    error: "",
    isLoading: false,
};
export const reviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postReviewAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postReviewAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(postReviewAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default reviewSlice.reducer;
