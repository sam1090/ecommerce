import React from "react";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
        </div>
        <div className="blog-content">
          <p className="date">09 mar, 2023</p>
          <h5 className="title">A Beautiful Sunday Morning renaissance</h5>
          <p className="desc">
            Nulla ea incididunt officia anim enim et.Minim anim pariatur quis
            nulla in pariatur mollit cupidatat officia cupidatat esse qui ea
            exercitation.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
