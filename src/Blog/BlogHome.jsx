import React, { useState, useEffect } from "react";
import articles from "./bloglist";
import { Link } from "react-router-dom";

const BlogHome = () => {
  const [blogEntries, setBlogEntries] = useState([]);

  useEffect(() => {
    setBlogEntries(articles);
  }, []);

  return (
    <div>
      <h1 style={{ marginBottom: "80px" }}>Blog Entries</h1>
      {blogEntries.map((article) => (
        <div key={article.id}>
          <Link to={`/article/${article.id}`}>
            <h2>{article.name}</h2>
          </Link>
          <p>{article.date}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogHome;
