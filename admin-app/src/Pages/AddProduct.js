import React, { useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";

let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is required"),
  password: yup.string().required("Password is Required"),
});


const AddProduct = () => {
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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


  let schema = yup.object().shape({
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is required"),
    password: yup.string().required("Password is Required"),
  });
  
  
  const AddProduct = () => {
    
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
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
        <form action="">
          <CustomInput type="text" label="Enter Product Title" />
          <ReactQuill
            theme="snow"
            value={desc}
            onChange={(evt) => {
              handleDesc(evt);
            }}
          />
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
