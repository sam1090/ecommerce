import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import enquiryService from "./enquiryService";

export const getEnquiry = createAsyncThunk(
  "customer/get-customers",
  async (thunkAPI) => {
    try {
      return await enquiryService.getEnquiry();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  enquiry: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};


export const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.enquiry = action.payload;
      })
      .addCase(getEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default enquirySlice.reducer;
