import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { Link } from "react-router-dom";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const SingleProduct = () => {
  const props = {
    width: 482,
    height: 500,
    zoomWidth: 600,
    img: "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=250&q=60"
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Luxury Watches For Men</h3>
                </div>

                <div className="border-bottom py-3">
                  <p className="price">$500</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="t-review mb-0">{"(100K reviews)"}</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type:</h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand: </h3>
                    <p className="product-data">Casio</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags: </h3>
                    <p className="product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability: </h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-2">
                    <h3 className="product-heading">Size: </h3>
                    <div className="d-flex fles-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10  flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color: </h3>
                    <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3  ">
                    <h3 className="product-heading">Quantity: </h3>
                    <div className="">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "70px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-5">
                      <button className="button border-0">Add to Cart</button>
                      <button className="button signup">Buy Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="">
                        <BiGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </a>
                    </div>
                  </div>
                  <div className="d-flex flex-column gap-10  my-3">
                    <h3 className="product-heading">Shipping and Returns :</h3>
                    <p className="product-data">
                      Free Shipping and returns available on all orders! <br />
                      We ship all US domestic orders within
                      <b>5-10 business days</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Product Link :</h3>
                    <a
                      href="javascript:void(0)"
                      onClick={() => {
                        copyToClipboard(
                          "https://images.unsplash.com/photo-1619134778706-7015533a6150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2hlcyUyMGZvciUyMG1lbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
                        );
                      }}

                    > Click Here!
                     </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="description-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h4>Description</h4>
                  <div className="bg-white p-3">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sit fugiat nisi obcaecati delectus consequuntur. Unde
                      inventore, nesciunt, voluptates veritatis modi ab
                      repellendus velit saepe suscipit ad eius incidunt adipisci
                      aspernatur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="reviews-wrapper home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <h3 id="review">Reviews</h3>
                  <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                      <div>
                        <h4 className="mb-2">Customer Reviews</h4>
                        <div className="d-flex gap-10 align-items-center ">
                          <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                          <p className="mb-0"> Based on 100 Reviews</p>
                        </div>
                      </div>
                      {orderedProduct && (
                        <div>
                          <a
                            className="text-dark text text-decoration-underline"
                            href=""
                          >
                            Write a Review
                          </a>
                        </div>
                      )}
                    </div>
                    <div className="review-form py-4">
                      <h4>Write a Review</h4>
                      <form action="" className="d-flex flex-column gap-15">
                        <div>
                          <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={true}
                            activeColor="#ffd700"
                          />
                        </div>
                        <div>
                          <textarea
                            name=""
                            id=""
                            className="w-100 form-control "
                            cols="30"
                            rows="4"
                            placeholder="Comments"
                          ></textarea>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button className="button border-0">Submit</button>
                        </div>
                      </form>
                    </div>
                    <div className="reviews">
                      <div className="review">
                        <div className="d-flex align-items-center gap-10">
                          <h6 className="mb-0">Saumya</h6>
                          <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                          />
                        </div>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Inventore aliquam excepturi temporibus ratione.
                          Nihil officiis eius architecto quasi repellendus dolor
                          vel quaerat sunt, ex vitae totam corrupti tempora
                          voluptatem eveniet?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="popular-wrapper  py-5 home-wrapper-2">
            <div className="container-xxl">
              <div className="row">
                <div className="col-12">
                  <div className="section-heading">Our Popular Products</div>
                </div>
              </div>

              <div className="row">
                <ProductCard />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
