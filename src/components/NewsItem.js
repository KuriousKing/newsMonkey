import React,{ Component } from "react";

const NewsItem=(props) => {
    let { title,description,imageUrl,newsUrl,author,date }=props;
    return (
        <div>
            <div className="card my-3 mx-4">
                <img src={!imageUrl? "https://picsum.photos/100":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">by {!author? "Anonymous":author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-light">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem