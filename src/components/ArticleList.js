import React from "react"
import Article from "./Article"

const ArticleList = ({posts}) => {
  const renderedArticles = posts.map((post) => <Article post={post} key={post.id}/>)
  return (
    <main>
      {renderedArticles}
    </main>
  )
}

export default ArticleList
