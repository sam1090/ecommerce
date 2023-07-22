import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">DealHaven</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": " >" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp; /
                    <li className="breadcrumb-item active ">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title">Contact Information</h4>
                <p className="user-details">Saumya (usam21@gmail.com)</p>
                <form
                  action=""
                  className="d-flex gap-15 justify-content-between flex-wrap"
                >
                  <div className="w-100">
                    <select name="" className="form-control  form-select" id="">
                      <option value="" selected disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, etc"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control  form-select" id="">
                      <option value="" selected disabled>
                        Select State
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ZipCode"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack className="me-2" />
                        Return to Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue to Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-4">
                <div className="d-flex mb-2 gap-10 align-items-center">
                  <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span style={{top:"-10px", right:"2px"}} className="badge bg-secondary text-white rounded-circle p-1 position-absolute">1</span>
                    <img src={watch} alt="product-image" className="img-fluid" />
                  </div>
                  <div>
                    <h5 className="total-price">gfdhf</h5>
                    <p className="total-price">s/ ghdfgdh </p>
                  </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5 className="total">$1000</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex align-items-center justify-content-between  ">
                  <p className="total">Subtotal</p>
                  <p className="total-price"> $ 1000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between  ">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$ 1000</p>
                </div>
              </div>

              <div className="d-flex align-items-center justify-content-between  border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$ 1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
