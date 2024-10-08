import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-toastify';

import BlogCard from '../components/BlogCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../utils/Data';
import { getAllBlogs } from '../features/blogs/blogSlice';
import {
  addToWishlist,
  getAllProducts,
} from '../features/products/productSlice';
import wish from '../images/wish.svg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';
import prodcompare from '../images/prodcompare.svg';
import { getUserCart } from '../features/user/userSlice';
import FamousSlider from '../components/FamousSlider';
import MainBannerSlider from '../components/MainBannerSlider';
import Loader from '../components/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state.product.product);

  const getBlogs = () => {
    dispatch(getAllBlogs())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      });
  };

  const getProducts = () => {
    dispatch(getAllProducts())
      .then(() => setLoading(false))
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  };

  const addToWish = (id) => {
    dispatch(addToWishlist(id));
    toast.success('Item added to wishlist!');
  };

  const getCartItems = () => {
    dispatch(getUserCart());
  };

  useEffect(() => {
    getBlogs();
    getProducts();
    getCartItems();
  }, []);

  const smallBanners = [
    {
      image: 'images/sm11.jpg',
      className:'mt-5',
      alt: 'Trending',
      // title: 'Trending',
      // subtitle: 'Washing Machine',
      // price: 'From ₹39999',
    },
    {
      image: 'images/sm2.jpg',
      alt: '15% off',
      title: '15% off',
      subtitle: 'Shoes',
      price: 'From ₹599',
    },
    {
      image: 'images/sm4.jpg',
      alt: 'best sale',
      title: 'best sale',
      subtitle: 'Headphones',
      price: 'From ₹999',
    },
    {
      image: 'images/sm33.jpg',
      alt: 'new arrivals',
      // title: 'new arrivals',
      // subtitle: 'Buy iPads',
      // price: 'From ₹60,999',
    },
    
    
  ];

  const mainBannersData = [
    {
      image: 'images/blog41.jpg',
      alt: '',
      title: '',
      subtitle: '',
      priceInfo: '',
      link: '/product',
    },
    {
      image: 'images/blog12111.jpg',
      // alt: 'main banner 2',
      // title: 'New Arrivals',
      // subtitle: 'Spring Fashion',
      // priceInfo: 'Discover More',
      link: '/product',
    },
    {
      image: 'images/mainbanner31.jpg',
      // alt: 'main banner 3',
      // title: 'Limited Time Offer',
      // subtitle: 'Summer Essentials',
      // priceInfo: 'Get Yours Now!',
      link: '/product',
    },
  ];

  const famousItemsData = [
    {
      imageSrc: '/images/tvnew.png',
      title: 'Big screen',
      subTitle: 'Curved Smart TV',
      description: 'Samsung OLED Series',
      color: 'text-dark',
    },
    {
      imageSrc: '/images/famous-2.webp',
      title: 'Macbook',
      subTitle: 'Apple Macbook Air M1',
      description: 'Apple M1 Processor',
      color: 'text-dark',
    },
    {
      imageSrc: '/images/ipadnew.png',
      title: 'Smartphones',
      subTitle: 'APPLE iPhone 14 Pro',
      description: 'Retina Display',
      color: 'text-dark',
    },
    {
      imageSrc: '/images/famous-4.webp',
      title: 'Home Speakers',
      subTitle: 'Room Filling Sound',
      description: 'EMI starts at ₹167. No Cost EMI available',
      color: 'text-dark',
    },
  ];

  return (
    <>
      <Container className="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <MainBannerSlider mainBannersData={mainBannersData} />
          </div>
          <div className="col-lg-6 mt-5">
            <div className="d-flex flex-wrap gap-10 justify-content-between">
              {smallBanners.map((banner, index) => (
                <div
                  className="small-banner position-relative mb-2 mt-2"
                  key={index}
                >
                  <img
                    className="img-fluid rounded-3"
                    src={banner.image}
                    alt={banner.alt}
                  />
                   <div className="banner-overlay"></div>
                  <Link
                    to="/product"
                    className="small-banner-content position-absolute"
                  >
                    <h4>{banner.title}</h4>
                    <h5 className="text-black">{banner.subtitle}</h5>
                    <p>{banner.price}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container class1={'home-wrapper-2 py-5'}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="services d-flex flex-wrap align-items-center justify-content-between">
              {services?.map((service, index) => {
                return (
                  <div
                    className="d-flex flex-column align-items-center gap-10 mb-4"
                    key={index}
                  >
                    <img
                      src={service.image}
                      alt="services"
                      className="img-fluid"
                    />
                    <div>
                      <h6 className="text-center">{service.title}</h6>
                      <p className="text-center mb-0">{service.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1={'featured-wrapper py-2 home-wrapper-2'}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>

          <>
  {(() => {
    console.log("displaying");
    return null;
  })()}
  {loading ? (
    console.log("loading products")
  ) : (
    productState &&
    productState.map((item, index) => {
      if (item.tags === 'featured') {
        return (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-6">
            <div className="product-card position-relative mb-3" style={{ cursor: 'pointer' }}>
              <div className="wishlist-icon position-absolute">
                <button className="border-0 bg-transparent" onClick={() => addToWish(item?._id)}>
                  <img src={wish} alt="wishlist" />
                </button>
              </div>
              <div className="product-image" onClick={() => navigate('/product/' + item?._id)}>
                <img src={item?.images[0]?.url} alt="products" className="img-fluid" />
                <img src={item?.images[1]?.url} alt="products" className="img-fluid" />

              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars value={+item?.totalrating} edit={false} count={5} size={24} activeColor="#ffd700" />
                <p className="price">₹{item.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={prodcompare} alt="compare" />
                  </button>
                  <button className="border-0 bg-transparent">
                    <img onClick={() => navigate('/product/' + item?._id)} src={view} alt="view" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      }
    })
  )}
</>

        </div>
      </Container>

      <Container class1={'famous-wrapper py-5 home-wrapper-2'}>
        <div className="row">
          <div className="container-fluid famous-wrapper py-5 home-wrapper-2">
            <div className="">
              <FamousSlider
                famousItemsData={famousItemsData}
                navigate={navigate}
              />
            </div>
          </div>
        </div>
      </Container>

      <Container class1={'special-wrapper py-5 home-wrapper-2'}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
          <div className="row">
            {loading ? (
              <Loader message={'Fetching products, please wait...'} />
            ) : (
              productState &&
              productState.map((item, index) => {
                if (item.tags === 'special') {
                  return (
                    <SpecialProduct
                      key={index}
                      id={item?._id}
                      title={item?.title}
                      brand={item?.brand}
                      totalrating={+item?.totalrating}
                      price={item?.price}
                      quantity={item?.quantity}
                      sold={item?.sold ? item?.sold : 0}
                      images={item?.images[0]?.url}
                    />
                  );
                }
              })
            )}
          </div>
        </div>
      </Container>

      <Container class1={'popular-wrapper py-5 home-wrapper-2'}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <>
            {loading ? (
              <Loader message={'Fetching products, please wait...'} />
            ) : (
              productState &&
              productState.map((item, index) => {
                if (item.tags === 'popular') {
                  return (
                    <div
                      key={index}
                      className={'col-lg-3 col-md-4 col-sm-6 col-6'}
                    >
                      <div
                        className="product-card position-relative"
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigate(`/product/${item?._id}`)}
                      >
                        <div className="wishlist-icon position-absolute">
                          <button
                            className="border-0 bg-transparent"
                            onClick={() => addToWish(item?._id)}
                          >
                            <img src={wish} alt="wishlist" />
                          </button>
                        </div>

                        <div className="product-image ">
                          <img
                            src={item?.images[0]?.url}
                            
                            alt="products"
                            className=""
                            width={250}
                            height={200}
                          />
                          <img
                            src={item?.images[1]?.url}
                            alt="products"
                            className=""
                            width={250}
                            height={200}
                          />
                        </div>
                        <div className="product-details">
                          <h6 className="brand">{item?.brand}</h6>
                          <h5 className="product-title">{item?.title}</h5>
                          <ReactStars
                            value={+item?.totalrating}
                            edit={false}
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                          />

                          <p className="price">₹{item.price}</p>
                        </div>
                        <div className="action-bar position-absolute">
                          <div className="d-flex flex-column gap-15">
                            <button className="border-0 bg-transparent">
                              <img src={prodcompare} alt="compare" />
                            </button>
                            <button className="border-0 bg-transparent">
                              <img
                                onClick={() =>
                                  navigate('/product/' + item?._id)
                                }
                                src={view}
                                alt="view"
                              />
                            </button>
                            {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            )}
          </>
        </div>
      </Container>

      <Container className={'marque-wrapper py-5'}>
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee>
                <div className="d-flex">
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-01.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-02.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-03.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-04.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-05.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-06.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-07.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                  <div className="mx-2 mx-sm-4 w-25">
                    <img
                      src="images/brand-08.png"
                      alt="brand"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1={'blog-wrapper py-5 home-wrapper-2'}>
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {loading ? (
            <Loader message={'Fetching blogs, please wait...'} />
          ) : (
            blogState &&
            blogState?.map((blog, index) => {
              if (index < 4) {
                return (
                  <div className="col-lg-3 col-md-6 col-sm-12 mb-4" key={index}>
                    <BlogCard
                      id={blog?._id}
                      title={blog?.title}
                      description={blog?.description}
                      image={blog?.images[0]?.url}
                      date={moment(blog?.createdAt).format(
                        'MMMM Do YYYY, h:mm a'
                      )}
                    />
                  </div>
                );
              }
            })
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;
