/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./blog.css";
import { blogPosts } from "../Blog/BlogData";

const BlogSection = () => {
  blogPosts = []

  return (
    <div className="blog-section" id="blog">
      <h1 className="section-title mb-5">Blog</h1>
    </div>
  );
};

export default BlogSection;
