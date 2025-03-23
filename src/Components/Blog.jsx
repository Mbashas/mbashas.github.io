import React from "react";
import blogImage from "../images/blog-background.jpg";

const imageAltText = "Ancient Kongo patterns with avocado tones";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Systems and Communities",
      date: "April 15, 2024",
      description: "Technology, thoughtfully applied, can help solve humanity's greatest challenges.",
      link: "#",
      image: "https://source.unsplash.com/random/300x200/?technology",
    },
    {
      title: "The Future of AI and Human Thought Patterns",
      date: "March 22, 2024",
      description: "Exploring the intersection of artificial intelligence and human cognition.",
      link: "#",
      image: "https://source.unsplash.com/random/300x200/?ai",
    },
    {
      title: "Embedded Systems: Building the Future",
      date: "February 17, 2024",
      description: "How embedded systems are shaping our technological landscape.",
      link: "#",
      image: "https://source.unsplash.com/random/300x200/?computer",
    },
    {
      title: "Ancient Wisdom in Modern Technology",
      date: "January 05, 2024",
      description: "Learning from ancient African civilizations to inform modern technological solutions.",
      link: "#",
      image: "https://source.unsplash.com/random/300x200/?africa",
    },
  ];

  return (
    <section className="padding" id="blog">
      <img className="background" src={blogImage} alt={imageAltText} />
      <div style={{ 
        backgroundColor: "rgba(245, 245, 240, 0.9)",
        padding: "2rem",
        borderRadius: "10px",
        maxWidth: "1200px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem", color: "#3a5a40" }}>Blog</h2>
        <p style={{ textAlign: "center", marginBottom: "2rem", fontSize: "1.1rem" }}>
          Thoughts and insights on technology, innovation, and ancient wisdom applied to modern challenges.
        </p>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "2rem",
          marginTop: "2rem"
        }}>
          {blogPosts.map((post, index) => (
            <div key={index} style={{ 
              background: "white", 
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid #e0e0e0"
            }}
            className="blog-card">
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ 
                  width: "100%", 
                  height: "180px", 
                  objectFit: "cover" 
                }} 
              />
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                <span style={{ color: "#6a8d73", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{post.date}</span>
                <h3 style={{ marginTop: "0", marginBottom: "1rem", color: "#3a5a40" }}>{post.title}</h3>
                <p style={{ flexGrow: 1 }}>{post.description}</p>
                <a 
                  href={post.link} 
                  style={{ 
                    display: "inline-block", 
                    marginTop: "1rem", 
                    color: "#3a5a40",
                    textDecoration: "none",
                    fontWeight: "bold",
                    borderBottom: "2px solid #3a5a40"
                  }}
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
