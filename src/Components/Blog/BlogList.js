import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BlogCard from './BlogCard';

const BlogList = ({ blogs }) => {
  return (
    <Container>
      <Row>
        {blogs.map((blog, index) => (
          <Col lg={4} md={6} sm={12} key={index} className = "mb-3">
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;
