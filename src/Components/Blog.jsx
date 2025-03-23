import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fallback blog posts if Medium API fails
  const fallbackPosts = [
    {
      title: "Building Systems and Communities",
      date: "April 15, 2024",
      excerpt: "Technology, thoughtfully applied, can help solve humanity's greatest challenges.",
      image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      link: "./blog.html"
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
    }
  ];

  useEffect(() => {
    // Function to fetch Medium posts
    const fetchMediumPosts = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sethmbasha`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }
        
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          // Process and format Medium posts
          const formattedPosts = data.items.map(item => {
            // Extract image from content or use a placeholder
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = item.content;
            const firstImage = tempDiv.querySelector('img');
            const imageUrl = firstImage ? firstImage.src : `https://source.unsplash.com/random/600x400/?${item.categories[0] || 'technology'}`;
            
            // Extract excerpt
            const excerpt = item.content
              .replace(/<[^>]*>/g, '') // Remove HTML tags
              .substring(0, 150) + '...'; // Limit to 150 chars
            
            // Format date
            const date = new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            });
            
            return {
              title: item.title,
              date: date,
              excerpt: excerpt,
              image: imageUrl,
              link: item.link
            };
          });
          
          setPosts(formattedPosts);
        } else {
          throw new Error('No posts found or invalid data format');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
        setPosts(fallbackPosts);
        setError('Failed to load Medium posts. Showing fallback content.');
        setLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <section id="blog" className="section">
      <div className="container">
        <h2 className="text-center">From My Blog</h2>
        <p className="lead text-center" style={{ marginBottom: "3rem" }}>
          Thoughts and insights on technology, innovation, and ancient wisdom applied to modern challenges
        </p>
        
        {loading ? (
          <div className="text-center">
            <div className="loader"></div>
            <p>Loading blog posts...</p>
          </div>
        ) : (
          <>
            {error && (
              <div className="alert" style={{ marginBottom: "2rem", padding: "1rem", backgroundColor: "#fff3cd", borderLeft: "4px solid #ffc107" }}>
                {error}
              </div>
            )}
            
            <div className="blog-grid">
              {(posts.length > 0 ? posts : fallbackPosts).slice(0, 3).map((post, index) => (
                <div className="blog-card" key={index}>
                  <img src={post.image} alt={post.title} className="blog-img" />
                  <div className="blog-content">
                    <div className="blog-date">{post.date}</div>
                    <h3 className="blog-title">{post.title}</h3>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <a href={post.link} className="blog-link" target="_blank" rel="noopener noreferrer">
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center" style={{ marginTop: "3rem" }}>
              <a href="/blog.html" className="btn">View All Posts</a>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
