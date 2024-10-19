import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 
import "./blog.css";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <Card className="mb-4 blog-card" id="each-card">
      <Card.Img variant="top" src={blog.images[0]} alt={blog.title} className="card-img"/>
      <Card.Body className="card-body-scrollable">
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>{blog.excerpt}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
