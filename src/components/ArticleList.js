import React from "react"
import Article from "./Article"

const ArticleList = ({posts}) => {
  const renderedArticles = posts.map((post) => <Article
  title={post.title}
  date={post.date}
  preview={post.preview}
  key={post.id}
  />)
  return (
    <main>
      {renderedArticles}
    </main>
  )
}

export default ArticleList
