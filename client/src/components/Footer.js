import { BsLinkedin, BsYoutube, BsInstagram, BsFacebook, BsGithub, BsTwitter } from 'react-icons/bs';

import { FaCode } from 'react-icons/fa'; 
import { SiLeetcode } from 'react-icons/si'; 

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-white">
        <div className="container-xxl py-4">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Dukaan-24/7
                </h6>
                <p>
                  <a href="/contact" className="text-white">
                    Contact us
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-white">
                    About us
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Careers
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Wholesales
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Information
                </h6>
                <p>
                  <a href="/" className="text-white">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Refund Policy
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Shipping Policy
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Terms Of Service
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Account
                </h6>
                <p>
                  <a href="/" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="/" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i>Girls Hostel, JSS Academy of Technical Education, Sector-62, Gautam Buddha Nagar, Industrial Area, Noida - 201301
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +91 99XXXXXXXX
                </p>
              </div>
            </div>
          </section>

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  &copy; {new Date().getFullYear()}{' '}
                  
                    Dukaan-24/7.com
                  
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  className="text-white btn btn-floating m-1"
                  href="https://www.linkedin.com/in/urvashi-shukla/"
                >
                  <BsLinkedin className="fs-4" />
                </a>

                <a
                  className="btn btn-floating m-1 text-white"
                  href="https://github.com/urvashi1210"
                >
                  <BsGithub className="fs-4" />
                </a>

                <a
                  className="btn btn-floating m-1 text-white"
                  href="https://x.com/Urvashi_0107?t=0PJ5gTCpG8ds09s0WuSfFw&s=09"
                >
                  <BsTwitter className="fs-4" />
                </a>

                <a
                  className="btn btn-floating m-1 text-white"
                  href="https://leetcode.com/u/urvashi1210/"
                >
                  <SiLeetcode className="fs-4" />
                </a>

                <a
                  className="btn btn-floating m-1 text-white"
                  href="https://codeforces.com/profile/urvashi_1210"
                >
                  <FaCode className="fs-4" />
                </a>

              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
