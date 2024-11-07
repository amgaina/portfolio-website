import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogData";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts[parseInt(id) - 1];

  if (!blog) {
    return (
      <Container className="text-center my-5">
        <h2>Hi, This is Abhishek Amgain 😀. This page is under maintenance.</h2>
        <p>Please visit after some hours. I am trying to fix the problem.</p>
        <Button variant="primary" href="/#/blog">
          Go Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Container className="blog-detail my-5">
      <Row>
        <Col md={8} className="mx-auto">
          <h1 className="blog-title">{blog.title}</h1>
          <Image
            src={blog.images[0]}
            alt={blog.title}
            className="blog-image my-4"
            fluid
          />
          <div className="blog-description">{blog.description}</div>
          <Button variant="secondary" href="/#/blog" className="mt-4">
            Back to Blogs
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetail;
