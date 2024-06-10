import React from "react"

const minutesReadEmoji = (minutes, blogEmoji, counter) => {
  let emoji = blogEmoji
  let count = Math.ceil(minutes/counter) * counter
  while(count > counter){
    emoji = emoji + blogEmoji
    count = count - counter
  }
  return emoji
}

const Article = ({title, date = "January 1, 1970", preview, minutes}) => {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {minutes < 30 ? minutesReadEmoji(minutes, "☕️", 5) : minutesReadEmoji(minutes, "🍱", 10)}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  )
}

export default Article
