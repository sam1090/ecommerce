import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative ">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>NEW ARRIVAL</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo.</p>
                  <Link className="button"> BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>NEW ARRIVAL</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br />
                      or $41.62/mo.
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-03.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>BEST SALE</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
                <div className="small-banner position-relative ">
                  <img
                    src="images/catbanner-04.jpg"
                    className="img-fluid rounded-3"
                    alt="small banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>SUPERCHARGED FOR PROS.</h4>
                    <h5>iPad S13+ Pro.</h5>
                    <p>
                      From $999.00 <br /> or $41.62/mo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over $5</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25%</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img src="images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory Default Price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <img src="images/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0">100% Protected Payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="music and gaming"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Cameras</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="camera"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/camera.jpg" alt="music and gaming"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart TV</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/tv.jpg" alt="TV"></img>
                </div>
                <div className="d-flex align-items-center gap">
                  <div>
                    <h6>Smart Watches</h6>
                    <p> 10 Items</p>
                  </div>
                  <img src="images/headphone.jpg" alt="camera"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-wrapper  py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">Featured Collection</div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="famous-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/iphone.png"
                  alt="famous"
                  className="img-fluid bg-dark gap-10"
                />

                <div className="famous-content position-absolute">
                  <h5>Big Screen</h5>
                  <h6>Iphone 13 </h6>
                  <p>From $599or $89.62/mo. for 24 mo.*</p>
                </div>
              </div>
              </div>
              <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/bluetooth.png"
                  alt="famous"
                  className="img-fluid bg-white gap-10"
                />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Big Screen</h5>
                  <h6 className="text-dark">JBL BLUETOOTH </h6>
                  <p className="text-dark">From $399or $16.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/headphone.png"
                  alt="famous"
                  className="img-fluid bg-white gap-10"
                />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Enhanced base</h5>
                  <h6 className="text-dark">Bluetooth</h6>
                  <p className="text-dark">From $99or $8.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>

            

            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  src="images/ipad.png"
                  alt="famous"
                  className="img-fluid bg-white gap-10"
                />

                <div className="famous-content position-absolute">
                  <h5 className="text-dark">Latest Model</h5>
                  <h6 className="text-dark">Ipad </h6>
                  <p className="text-dark">From $999or $80.62/mo. for 24 mo.*</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading ">Special Products</h3>
            </div>
          </div>
          <div className="row">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>

      <section className="popular-wrapper  py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Popular Products</div>
            </div>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex ">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="section-heading">Our Latest Blogs</div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
