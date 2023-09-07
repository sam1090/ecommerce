import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import blogReducer from "../features/blog/blogSlice";
import pCategoryReducer from "../features/pcategory/pcategorySlice";
import blogCatRouter from "../features/bcategory/bcategorySlice";
import colorRouter from "../features/color/colorSlice";
import enquiryRouter from "../features/enquiry/enquirySlice";
// import orderRouter from "../features/order/orderSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    productCategory : pCategoryReducer,
    blog : blogReducer,
    blogCategory: blogCatRouter,
    color : colorRouter,
    enquiry : enquiryRouter,
    // order: orderRouter,
  },
});
