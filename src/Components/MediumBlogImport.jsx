import React, { useState, useEffect } from "react";

const MediumBlogImport = ({ username = "@sethmbasha" }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Using the RSS2JSON API to convert Medium RSS feed to JSON
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items);
        } else {
          throw new Error('Failed to parse Medium RSS feed');
        }
        
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, [username]);

  // Format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Extract the first paragraph from the content as a description
  const extractDescription = (content) => {
    const div = document.createElement('div');
    div.innerHTML = content;
    
    // Try to get the first paragraph
    const paragraph = div.querySelector('p');
    if (paragraph) {
      // Limit to around 150 characters
      let text = paragraph.textContent;
      return text.length > 150 ? text.slice(0, 147) + '...' : text;
    }
    
    // If no paragraph, just return a portion of the text
    return content.replace(/<[^>]*>/g, '').slice(0, 147) + '...';
  };

  // Get image from content or use a placeholder
  const getImage = (item) => {
    // Try to use the thumbnail from the RSS feed
    if (item.thumbnail && item.thumbnail !== '') {
      return item.thumbnail;
    }
    
    // Try to extract the first image from the content
    const div = document.createElement('div');
    div.innerHTML = item.content;
    const img = div.querySelector('img');
    
    if (img && img.src) {
      return img.src;
    }
    
    // Fallback to a category-based placeholder
    const categories = item.categories;
    let category = "technology";
    
    if (categories && categories.length > 0) {
      category = categories[0].toLowerCase();
    }
    
    return `https://source.unsplash.com/random/300x200/?${category}`;
  };

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Loading Medium posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <p>Error loading Medium posts: {error}</p>
        <p>Showing placeholder content instead</p>
        
        {/* Render the static posts from Blog.jsx as fallback */}
      </div>
    );
  }

  return (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
      gap: "2rem",
      marginTop: "2rem"
    }}>
      {posts.map((post, index) => (
        <div 
          key={index} 
          style={{ 
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
          className="blog-card"
        >
          <img 
            src={getImage(post)} 
            alt={post.title} 
            style={{ 
              width: "100%", 
              height: "180px", 
              objectFit: "cover" 
            }} 
          />
          <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flexGrow: 1 }}>
            <span style={{ color: "#6a8d73", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
              {formatDate(post.pubDate)}
            </span>
            <h3 style={{ marginTop: "0", marginBottom: "1rem", color: "#3a5a40" }}>
              {post.title}
            </h3>
            <p style={{ flexGrow: 1 }}>
              {extractDescription(post.content)}
            </p>
            <a 
              href={post.link} 
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: "inline-block", 
                marginTop: "1rem", 
                color: "#3a5a40",
                textDecoration: "none",
                fontWeight: "bold",
                borderBottom: "2px solid #3a5a40"
              }}
            >
              Read on Medium
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediumBlogImport;
