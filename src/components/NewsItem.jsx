import React from 'react'
import image from '../images/news.jpeg'

const NewsItem = ({title, description, url, urlToImage}) => {
  return (
    
      <div className="card mb-3 bg-dark text-light d-inline-block mx-3 my-4" style={{maxWidth : "365px"}}>
        <img src={urlToImage?urlToImage:image} style={{height:"200px", width:"360px"}} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title ? title.slice(0,50): "News"}</h5>
            <p className="card-text">{description ? description.slice(0,90) : "Dive into the latest headlines spanning a myriad of categories, from breaking news and global events to science, technology, entertainment, and lifestyle" } </p>
            <a href={url} className="btn btn-primary">know more</a>
          </div>
      </div>
  )
}

export default NewsItem
