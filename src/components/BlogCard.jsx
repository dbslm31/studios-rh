import React from "react";

const BlogCard = (props) => {
  const { img, title, highlight, link, size, className, bgColor } = props;

  const cardSize = size === "small" ? "small-card" : "large-card";
  const classNames = `blog-card ${cardSize} ${className}`;
  const cardStyle = {
    backgroundColor: bgColor,
  };

  return (
    <div className={classNames} style={cardStyle}>
      {img && (
        <div className="blog-card-img">
          <img src={img} alt="blog cover" />
        </div>
      )}
      <div className="blog-card-content">
        <h3>{title}</h3>
        <p>{highlight}</p>
        <a href={link} className="read-more">
          Lire plus ➔
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
