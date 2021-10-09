import React from 'react'
import articles from './article-content'
import { Link } from 'react-router-dom'

const ArticleList = () => {
  return (
    <>
      <h1 className="sm:text-4xl text-center  text-2xl font-bold my-20 text-gray-100">Articles</h1>
      <ul>
        {articles.map(article => (
          <li>
            <Link to={`/article/${article.id}`}><h1 className='transition transform hover:text-blue-500 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none text-center text-xl p-5 text-white'>{article.title}</h1>
            </Link>
          </li>
        ))}
      </ul>
      
      
    </>
  )
}

export default ArticleList
