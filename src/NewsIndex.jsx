export function NewsIndex({ news }) {
  console.log(news)
  return (
    <div>
      <h1>All articles</h1>
      {news.map(article => (
        <div key={article.id}>
          <h4>{article.title}</h4>
          <p>{article.author}</p>
        </div>
      ))}
    </div>
  );
}