import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  }, [article_id]);

  if (loading) {
    return <p>Loading article...</p>;
  }

  if (!article) {
    return <p>No article found.</p>;
  }

  return (
    <div>
      <ArticleCard article={article} />
    </div>
  );
}

export default ArticleDetail;
