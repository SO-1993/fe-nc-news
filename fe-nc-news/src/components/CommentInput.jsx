import React, { useEffect, useState } from "react";
import { Routes, Route, useParams, Link } from "react-router-dom";
import { postComment } from "../utils/api";
import ArticleCard from "./ArticleCard";

function CommentInput() {
  function CommentInput() {
    const [name, setName] = useState("");
  }
}

export default CommentInput;

// CommentInput
// POST /api/articles//comments:
// provides a form for users to add new comments
// receives a function to handle comment deletion
// static; no state management
// [sortOrder, setSortOrder]

// - postComment(article_id)
// adds a new comment to an article using article_id

// For use later on Comments components

// const deleteComment = (commentId) => {
//   return api.delete(`/comments/${commentId}`).then((response) => {
//     return response.data;
//   });
// };
