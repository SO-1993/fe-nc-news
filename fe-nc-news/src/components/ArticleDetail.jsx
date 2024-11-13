import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../utils/api";
import ArticleCard from "./ArticleCard";
import CommentList from "./CommentList";
import VoteButton from "./VoteButton"; // Import the VoteButton

function ArticleDetail() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [votes, setVotes] = useState(0);

  // Fetch the article
  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setVotes(article.votes);
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
      <div style={{ backgroundColor: "lightgrey" }}>
        <h3>{article.title}</h3>
        <p>Author: {article.author}</p>
        <p>Votes: {votes}</p>
        <p></p>
        <p>Comments: {article.comment_count}</p>
        {/* <img className={styles.img}>src={article.article_img_url} /</img> */}
      </div>
      <VoteButton article_id={article_id} setVotes={setVotes} />{" "}
      {/* Pass initial votes */}
      <CommentList article_id={article_id} />
      <p>{article.body}</p>
    </div>
  );
}

export default ArticleDetail;
