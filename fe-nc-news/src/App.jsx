import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";
import CommentList from "./components/CommentList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;
