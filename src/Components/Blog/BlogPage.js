import React from "react";
import BlogList from "./BlogList";
import { blogPosts } from "./BlogData";
import "./blog.css";
const BlogPage = () => {
  return (
    <div>
      <h1 className="section-title mb-5">Memories</h1>
      <BlogList blogs={blogPosts} />
    </div>
  );
};

export default BlogPage;
