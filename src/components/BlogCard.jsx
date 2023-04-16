import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <img src={data.img} alt="blog cover" />
      </div>
      <div className="blog-card-content">
        <h3>{data.title}</h3>
        <p>{data.highlight}</p>
        <a href={data.link}>Lire plus</a>
      </div>
    </div>
  );
};

export default BlogCard;
