import React from "react";
import "./Blog.scss";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";

const blogData = [
  {
    title: "Why do project managers need to focus on strategy?",
    category: "Media SEO",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image: blog1,
  },
  {
    title: "What's trending on designers’ charts this spring",
    category: "Media SEO",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image: blog2,
  },
  {
    title: "Fresh startup ideas for your digital business",
    category: "Media SEO",
    date: "Apr 21, 2020",
    comments: "0 Comments",
    image: blog3,
  },
];

const Blog = () => {
  return (
    <div className="blog">
      <div className="blog__header">
        <p>Our Blog</p>
        <h2>Latest articles</h2>
      </div>
      <div className="blog__grid">
        {blogData.map((item, index) => (
          <div className="blog__card" key={index}>
            <div className="blog__image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="blog__content">
              <p className="category">{item.category}</p>
              <h3>{item.title}</h3>
              <p className="meta">
                {item.date} &nbsp;&bull;&nbsp; {item.comments}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
