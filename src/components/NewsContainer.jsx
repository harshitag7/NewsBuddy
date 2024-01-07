import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
// require("dotenv").config();

const NewsContainer = ({category}) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${process.env.React_App_API_KEY}`
        fetch(url).then((data) => data.json()).then((data)=>{setArticles(data.articles)})
    },[category])

  return (
    <div >
      <h2 className="text-center">Latest <span className="badge bg-danger ">News</span></h2>
        {articles?.map((article, index)=>{
            return <NewsItem key={index} title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage}/>
        })}
    </div>
  )
}

export default NewsContainer
