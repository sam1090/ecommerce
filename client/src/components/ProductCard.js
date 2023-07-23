import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";


const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <button className="border-0 bg-transparent">
              <img src={wish} alt="Wishlist" />
            </button>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              alt="product image"
              className="img-fluid"
            />
            <img
              src="images/watch-1.jpg"
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />

            <p className={`description ${grid === 12 ? "d-block" :" d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis similique dolorum, sit consequatur error! Tempora porro commodi similique dolorem libero? A in quam temporibus numquam praesentium labore exercitationem facere?
            </p>
            ,<p className="price"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view cart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to=':id' className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="Wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img
              src="images/watch.jpg"
              alt="product image"
              className="img-fluid"
            />
            <img
              src="images/watch-1.jpg"
              alt="product image"
              className="img-fluid"
            />
          </div>
          <div className="product-details">
            <h6 className="brand">Havels</h6>
            <h5 className="product-title">
              Kids headphones bulk 10 pack multi colored for students
            </h5>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor="#ffd700"
            />

            <p className={`description ${grid === 12 ? "d-block" :" d-none"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis similique dolorum, sit consequatur error! Tempora porro commodi similique dolorem libero? A in quam temporibus numquam praesentium labore exercitationem facere?
            </p>
            ,<p className="price"> $100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              <button className="border-0 bg-transparent">
                <img src={prodcompare} alt="compare" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={view} alt="view cart" />
              </button>
              <button className="border-0 bg-transparent">
                <img src={addcart} alt="addcart" />
              </button>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
