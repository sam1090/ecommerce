import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div
        className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3"}`}
      >
        <Link className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="Wishlist" />
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
              <Link>
                <img src="images/prodCompare.svg " alt="compare" />
              </Link>
              <Link>
                <img src="images/view.svg " alt="view cart" />
              </Link>
              <Link>
                <img src="images/add-cart.svg " alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div className={`${location.pathname == "/store" ? `gr-${grid}` : "col-3" }`}>
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="Wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img src="images/watch.jpg" alt="product image" className="img-fluid"/>
          <img src="images/watch-1.jpg" alt="product image" className="img-fluid"/>
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
            <Link>
              <img src="images/prodCompare.svg " alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg " alt="view cart" />
            </Link>
            <Link>
              <img src="images/add-cart.svg " alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
