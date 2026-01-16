import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTransaction } from "../../service/transaction";

export const postTransactionAsync = createAsyncThunk(
    "transaction/fetchTransaction",
    async (data) => {
        const response = await createTransaction(data);
        return response;
    }
);

const initialState = {
    data: [],
    error: "",
    isLoading: false,
};
export const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(postTransactionAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postTransactionAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(postTransactionAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default transactionSlice.reducer;
