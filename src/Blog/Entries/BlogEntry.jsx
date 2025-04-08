import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articles from "../bloglist";

const BlogEntry = () => {
  const { id } = useParams();
  const article = articles.find((entry) => entry.id === parseInt(id));
  const [content, setContent] = useState("");

  useEffect(() => {
    if (article) {
      fetch(article.filePath)
        .then((response) => response.text())
        .then((html) => {
          setContent(html);
        });
    }
  }, [article]);

  if (!article) {
    return <h1>Article Not Found</h1>;
  }

  return (
    <div
      style={{
        marginBottom: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>{article.name}</h1>
      <p>{article.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogEntry;
