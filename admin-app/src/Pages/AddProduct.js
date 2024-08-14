import React, { useEffect, useState } from "react";
import CustomInput from "../Components/CustomInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import useSelection from "antd/es/table/hooks/useSelection";
import { getCategories } from "../features/pcategory/pcategorySlice";
import Multiselect from "react-widgets/Multiselect";

let schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is Required"),
});

const AddProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
  }, []);
  const brandState = useSelector(
    (state) => state.brand.brands.getAllBrand || []
  );
  const categoryState = useSelector(
    (state) => state.pCategory.pCategories || []
  );
  const [brand, setBrand] = useState([]);
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      price: "",
    },
    validationSchema: schema,

    onSubmit: (values) => {
      alert(JSON.stringify(values));
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
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Title"
            name="title"
            onchng={formik.handleChange("title")}
            onBlr={formik.handleBlur("title")}
            val={formik.values.title}
          />
          <div className="error">
            {formik.touched.title && formik.errors.title}
          </div>
          <div className="mb-3">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              onBlur={formik.handleBlur("description")}
              value={formik.values.description}
            />
          </div>
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChange={formik.handleChange("price")}
            onBlur={formik.handleBlur("price")}
            value={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>
         
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Color</option>
          </select>{" "}
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Brand</option>
            {brandState.map((i, j) => {
              return (
                <option key={j} value="{i.title}">
                  {" "}
                  {i.title}
                </option>
              );
            })}
          </select>
          
          <select name="" className="form-control py-3 mb-3 " id="">
            <option value="">Select Category</option>
            {categoryState.map((i, j) => {
              return (
                <option key={j} value="{i.title}">
                  {" "}
                  {i.title}
                </option>
              );
            })}
            
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
