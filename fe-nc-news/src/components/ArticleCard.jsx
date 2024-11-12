function ArticleCard({ article }) {
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>Votes: {article.vote}</p>
      <p>Comments: {article.comment_count}</p>
      <p>Vote Count: {article.votes}</p>
      {/* <img className={styles.img}>src={article.article_img_url} /</img> */}
    </div>
  );
}

export default ArticleCard;
