import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Container from "../components/Container";
import blog3 from "../images/blog-3.jpg";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic"} />
      <BreadCrumb title="Dynamic" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to='/blogs ' className="d-flex align-items-center gap-10"><AiOutlineArrowLeft className="fs-4"/>Go back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog3} alt="blog" />
                <p> 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magnam, repellendus voluptas eligendi quis laborum consequuntur praesentium officiis, voluptatem, numquam in. Numquam, nihil vero. Dolorum totam veritatis aspernatur deleniti quis.
                </p>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default SingleBlog;
