import React from "react";

//Data
import blogData from "../blogData";

//Libraries
import { Slide, Fade } from "react-awesome-reveal";

//Components
import BlogCard from "./BlogCard";

const BlogArticles = () => {
  return (
    <section id="blog-articles" className="blog-articles">
      <Slide direction="left" damping={0.1}>
        <h2>Tous les conseils dont vous avez besoin</h2>
        <h1>Le blog de la RH</h1>
      </Slide>
      <div className="articles_container">
        <div className="articles_container column-1">
          {blogData.map((data) => (
            <BlogCard key={data.id} data={data} />
          ))}
        </div>
        <div className="articles_container column-2"></div>
      </div>
    </section>
  );
};

export default BlogArticles;
