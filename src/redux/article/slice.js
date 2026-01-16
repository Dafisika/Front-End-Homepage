import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchArticle, fetchArticleById } from "../../service/article";

export const fetchArticleAsync = createAsyncThunk(
    "article/fetchArticle",
    async () => {
        const response = await fetchArticle();
        return response;
    }
);
export const fetchArticleByIdAsync = createAsyncThunk(
    "article/fetchArticleById",
    async () => {
        const response = await fetchArticleById();
        return response;
    }
);

const initialState = {
    data: [],
    detail: {},
    error: "",
    isLoading: true,
};
export const articleSlice = createSlice({
    name: "article",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArticleAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            })
            .addCase(fetchArticleByIdAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchArticleByIdAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.detail = action.payload.data;
            })
            .addCase(fetchArticleByIdAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload.error;
            });
    },
});

export default articleSlice.reducer;
