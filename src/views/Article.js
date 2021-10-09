import React from 'react'
import articles from './article-content'
import { Link } from 'react-router-dom'

const Article = ({ match, }) => {
  console.log(match);
  const id = match.params.id;
  return (
    <div className="grid place-items-center h-screen shadow-md rounded">
        {articles.map(article => (
          article.id === id &&
            <>
            <p className=" text-xl rounded shadow-md bg-green-400 p-3">{article.title}</p>
            <p className="bg-green-400 text-md text-bold rounded p-3">{article.name}</p>
            <h2 className="mx-auto px-14 text-white leading-relaxed text-base">{article.content}</h2>
            </>
          ))} 

    <Link to="/article-list"><p className="text-white text-bold">Back</p></Link>
    </div> 
  )
}

export default Article
