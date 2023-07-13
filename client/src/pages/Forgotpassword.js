import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <BreadCrumb title="Forgot Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <p className="text-center mt-3 mb-3">We will send you an email to reset password</p>
              <form action="" className="d-flex flex-column gap-30">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="form-control"
                  />
                </div>
                
                <div>
                  <Link to="/forgot-password">Forgot Password</Link>
                  <div className="d-flex align-items-center gap-15 justify-content-center">
                    <button className="button border-0">Submit</button>
                    <Link to ='/login' >Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;
