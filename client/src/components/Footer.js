import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  className="form-control py-1 "
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 text-white">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hno: 344 Near White Villa,
                  <br /> Mumbai <br />
                  PinCode:116748
                </address>
                <a
                  href="tel : +917684307576"
                  className="mt-3 text-white mb-1 d-block"
                >
                  +917684307576
                </a>
                <a
                  href="mailto:usam12@gmail.com"
                  className="mt-2 text-white mb-0 d-block"
                >
                  usam12@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a href="" className="text-white">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsGithub className="fs-4" />
                  </a>
                  <a href="" className="text-white">
                    <BsYoutube className="fs-4" />
                  </a>
                  <a href=""></a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Privacy Policy</Link>
                <Link className="text-white mb-1 py-2">Refund Policy</Link>
                <Link className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link className="text-white mb-1 py-2">
                  Terms and Conditions
                </Link>
                <Link className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 text-white">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link className="text-white mb-1 py-2">Contact </Link>
              </div>
            </div>
            <div className="col-2 ">
              <h4 className="mb-4 text-white">Ouick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Created By Saumya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
