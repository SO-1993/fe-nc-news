import axios from "axios";

const api = axios.create({
  baseURL: "https://nc-news-73me.onrender.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

const voteOnArticle = (article_id, inc_votes) => {
  return api
    .patch(`/articles/${article_id}`, {
      inc_votes: inc_votes,
    })
    .then((response) => {
      return response.data.article;
    });
};

export { fetchArticles, fetchArticleById, fetchComments, voteOnArticle };
