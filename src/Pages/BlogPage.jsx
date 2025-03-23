import React from 'react';
import Layout from '../Components/Layout';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Building Systems and Communities",
      date: "April 15, 2024",
      excerpt: "Technology, thoughtfully applied, can help solve humanity's greatest challenges.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "./blog-post.html"
    },
    {
      title: "The Future of AI and Human Thought Patterns",
      date: "March 22, 2024", 
      excerpt: "Exploring the intersection of artificial intelligence and human cognition.",
      image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    },
    {
      title: "Embedded Systems: Building the Future",
      date: "February 17, 2024",
      excerpt: "How embedded systems are shaping our technological landscape and enabling new possibilities.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
      link: "#"
    },
    {
      title: "Ancient Wisdom in Modern Technology",
      date: "January 12, 2024",
      excerpt: "Lessons from traditional African knowledge systems that can improve how we design technology.",
      image: "https://images.unsplash.com/photo-1518709711348-5f1b72e5e078?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    },
    {
      title: "The Role of Community in Technological Innovation",
      date: "December 5, 2023",
      excerpt: "How collaborative approaches to technology development lead to more robust and inclusive solutions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    },
    {
      title: "Sustainable Technology: Lessons from Traditional Practices",
      date: "November 18, 2023",
      excerpt: "How indigenous knowledge about sustainable living can inform our approach to technology design.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "#"
    }
  ];

  return (
    <Layout>
      <section className="section" style={{ paddingTop: "120px" }}>
        <div className="container">
          <h1 className="text-center">My Blog</h1>
          <p className="lead text-center">Thoughts on technology, innovation, and ancient wisdom in modern solutions</p>
          
          <div className="blog-grid" style={{ marginTop: "3rem" }}>
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.image} alt={post.title} className="blog-img" />
                <div className="blog-content">
                  <div className="blog-date">{post.date}</div>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <a href={post.link} className="blog-link">Read More</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
