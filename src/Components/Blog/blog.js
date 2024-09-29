/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./blog.css";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Computer Science Workshop for High School Freshmen",
      description: (
        <>
          I recently led an project "Intro to Computer Science and AI" workshop
          designed specifically for high school freshmen. This initiative aimed
          to engage students with the foundational concepts of programming while
          introducing them to the fascinating world of artificial intelligence.
          <br />
          This pilot program was implemented in selected ninth-grade robotics,
          math, and science classrooms within the TRIO Educational Talent
          Search's target area schools, supported by the US Department of
          Education.
          <br />
          The workshop took place at Wossman High School and Neville High
          School, where we introduced students to core programming principles,
          and learned about AI applications through interactive activities and
          hands-on projects.
          <br />
          Students had the opportunity to explore coding concepts, work
          collaboratively on problem-solving tasks, and experience the
          excitement of building their own projects.
          <br />
          Feedback from the students and teachers was overwhelmingly positive,
          highlighting the fun and interactive nature of the sessions.
          <br />
          We're thrilled to announce that this is just the beginning! Plans are
          in place to pilot additional workshops in more high schools across the
          Monroe area that fall under the TRIO Program.
          <br />
          Stay tuned for updates as we continue to expand our outreach and
          foster a love for computer science among the next generation!
        </>
      ),
      images: [
        require("../Utils/trio_workshop/trio_workshop1.png"),
        require("../Utils/trio_workshop/trio_workshop2.png"),
      ],
    },
    // Add more blog posts here
  ];

  return (
    <div className="blog-section" id="blog">
      <h1 className="section-title mb-5">Blog</h1>
      <div className="blog-container">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card mb-5 p-3">
            <h2 className="blog-title">{post.title}</h2>
            <div className="blog-images">
              {post.images.map((image, imgIndex) => (
                <img
                  key={imgIndex}
                  src={image}
                  alt={`Blog Post Image ${imgIndex + 1}`}
                  className="blog-image mt-3"
                />
              ))}
            </div>
            <p className="blog-description mt-3">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
