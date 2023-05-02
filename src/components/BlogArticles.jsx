import React from "react";

//Data
import blogData from "../blogData";

//Libraries
import { Slide, Fade } from "react-awesome-reveal";

//Components
import BlogCard from "./BlogCard";

const BlogArticles = () => {
  return (
    <section className="blog" id="blog">
      <Slide direction="right" damping={0.1}>
        <h2>Tous les conseils dont vous avez besoin</h2>
        <h1>Le blog de la RH ?</h1>
      </Slide>
      <Fade cascade duration="1000">
        <div className="blog-articles">
          <div className="row-1">
            <div className="col-1">
              <BlogCard
                img={blogData[0].img}
                title={blogData[0].title}
                highlight={blogData[0].highlight}
                link={blogData[0].link}
                size="large"
                className="large-card"
                bgColor={blogData[0].bgColor}
              />
            </div>
          </div>
          <div className="row-2">
            {blogData.slice(1, 3).map((item) => (
              <div className="col-1" key={item.id}>
                <BlogCard
                  img={item.img}
                  title={item.title}
                  highlight={item.highlight}
                  link={item.link}
                  size="small"
                  className="small-card-1"
                  bgColor={item.bgColor}
                />
              </div>
            ))}
            <div className="col-2">
              <BlogCard
                img={blogData[3].img}
                title={blogData[3].title}
                highlight={blogData[3].highlight}
                link={blogData[3].link}
                size="large"
                className="small-card-1"
                bgColor={blogData[3].bgColor}
              />
            </div>
          </div>
        </div>
        <button className="btn-secondary">Voir tous les articles</button>
      </Fade>
    </section>
  );
};

export default BlogArticles;
