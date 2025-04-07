import React from "react";
import articles from "./bloglist.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Entry1 from "./Entries/Entry1.jsx";
const BlogHome = () => {
  return (
    <div>
      <h1 style={{ marginBottom: "80px" }}>Blog Entries</h1>
      {/*  {articles.map((article) => (
        <Nav.Link href={`/aticle${article.id}`}>
          <div key={article.id}>
            <div>{article.name}</div>
            <div>{article.date}</div>
          </div>
        </Nav.Link>
      ))}

         <Routes>
          {articles.map((article) => (
            <Route key={article.id} path={`/aticle${article.id}`} element={< />} />
          ))}
        </Routes>
*/}

      <Entry1 />
    </div>
  );
};

export default BlogHome;
