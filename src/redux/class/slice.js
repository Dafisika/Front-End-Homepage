import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
    createHandleSubmit,
    fetchClass,
    fetchClassById,
} from "../../service/class";

export const fetchClassAsync = createAsyncThunk(
    "class/fetchClass",
    async () => {
        const response = await fetchClass();
        return response;
    }
);
export const fetchClassByIdAsync = createAsyncThunk(
    "class/fetchClassById",
    async () => {
        const response = await fetchClassById();
        return response;
    }
);
export const postHandleSubmit = createAsyncThunk(
    "class/postHandleSubmit",
    async () => {
        const response = await createHandleSubmit();
        return response;
    }
);

const initialState = {
    data: [],
    detail: {},
    error: "",
    isLoading: true,
};
export const classSlice = createSlice({
    name: "class",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClassAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchClassAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchClassAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(fetchClassByIdAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchClassByIdAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.detail = action.payload;
            })
            .addCase(fetchClassByIdAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(postHandleSubmit.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(postHandleSubmit.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(postHandleSubmit.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default classSlice.reducer;
