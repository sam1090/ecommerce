import React from "react";
import CustomInput from "../Components/CustomInput";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';


const Login = () => {
  let schema = yup.objefct().shape({
    email: yup.string().email.required(),
    password: yup.string().required(),
    

  });

  const formik = useFormik({
    
    initialValues: {
      email: "",
      password: "",
    }, validationSchema: 'f' ,

    
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="py-5" style={{ background: "#ffd333", minHeight: "100vh" }}>
      <br />
      <br />
      <br />
      <br />
      <div className="my-5 w-25 bg-white rounded-3 mx-auto p-4">
        <h3 className="text-center title">Login</h3>
        <p className="text-center">Login to your account to continue</p>
        <form action="" onSubmit={formik.handleSubmit}>
          <CustomInput
            type="text"
            name="email" 
            label="Email Address"
            id="email"
            onCh={formik.handleChange("email")}
            val={formik.values.email}
          />
          <CustomInput
            type="password"
            name="password"
            label="Password"
            id="pass"
            onCh={formik.handleChange("password")}
            val={formik.values.password}
          />
          <div className="mb-3 text-end">
            <Link to="forgot-password">Forgot Password?</Link>
          </div>
          <button
            
            className="text-center text-decoration-none border-0 px-3 py-2 text-white fw-bold w-100 fs-5"
            style={{ background: "#ffd333" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
