import { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css';

const PREVIEW_LENGTH = 220;

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    axios.get('https://myblog-4thg.onrender.com/api/posts/')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <p className="blog-status">Yuklanmoqda...</p>;

  return (
    <div className="blog-page">
      <div className="blog-header">
        <p className="blog-eyebrow">Blog</p>
        <h1 className="blog-title">Postlar</h1>
      </div>

      <div className="blog-list">
        {posts.map((post) => {
          const isLong = post.content.length > PREVIEW_LENGTH;
          const isOpen = expanded[post.id];
          const displayText = isLong && !isOpen
            ? post.content.slice(0, PREVIEW_LENGTH).trim() + '…'
            : post.content;

          return (
           <article className="post-card" key={post.id}>
  <h2 className="post-title">{post.title}</h2>
  <p className="post-date">
    {new Date(post.created_at).toLocaleDateString('uz-UZ', {
      year: 'numeric', month: 'long', day: 'numeric',
    })}
  </p>
  {post.image && (
    <img src={post.image} alt={post.title} className="post-image" />
  )}
  <p className="post-content">{displayText}</p>
  {isLong && (
    <button className="post-toggle" onClick={() => toggleExpand(post.id)}>
      {isOpen ? 'Kamroq ko\'rsatish' : 'Batafsil o\'qish'}
    </button>
  )}
</article>
          );
        })}

        <div className="blog-footer-cat">
          <img src="/blog-cat.png" alt="" className="blog-cat-img" />
        </div>
      </div>
    </div>
  );
}

export default Blog;