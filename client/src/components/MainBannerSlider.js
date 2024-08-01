import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainBannerSlider = ({ mainBannersData }) => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {mainBannersData.map((banner, index) => (
        <div key={index}>
          <button
                className="border-0 mt-3"
                style={{ backgroundColor: 'white' }}
                onClick={() => navigate(banner.link)}
              >
          <div className="main-banner position-relative">
            <h1>   </h1>
            <img
              className="img-fluid rounded-3 mt-0"
              src={banner.image}
              alt={banner.alt}
            />
            {/* <div className="main-banner-content position-absolute">
              <h4>{banner.title}</h4>
              <h5>{banner.subtitle}</h5>
              <p>{banner.priceInfo}</p> */}
              
              
            {/* </div> */}
          </div>
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default MainBannerSlider;
