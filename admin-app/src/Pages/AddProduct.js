import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";


let schema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required"),
    description: yup
    .string()
    .required("Description is required")
});

  const AddProduct = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        title: "",
        description: "",
      },
      validationSchema: schema,
  
      onSubmit: (values) => {
        dispatch(login(values));
        alert(JSON.stringify(values, null, 2));
      },
    });
    const [desc, setDesc] = useState();
    const handleDesc = (e) => {
      setDesc(e);
    };
  

  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <CustomInput type="text" label="Enter Product Title" name='title' onchng = {formik.handleChange("title")} onBlr = {formik.handleblur("title")} />
          <div className="mb-3">
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
          </div>
        
          <CustomInput type="number" label="Enter Product Price" />
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Category</option>
          </select>
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Color</option>
          </select>{" "}
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Brand</option>
          </select>
          <CustomInput type="number" label="Enter Product Price" />
          
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
