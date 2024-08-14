import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogCatService from "./bcategoryService";


export const getBlogCat = createAsyncThunk(
  "blogCat/get-blogCat",
  async (thunkAPI) => {
    try {
      return await blogCatService.getBlogCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  blogCat: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogCatSlice = createSlice({
  name: "blogCat",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCat.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCat.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogCat= action.payload;
      })
      .addCase(getBlogCat.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default blogCatSlice.reducer;
 