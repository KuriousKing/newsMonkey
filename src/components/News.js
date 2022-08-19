import React,{ useEffect,useState } from "react";
import NewsItem from './NewsItem';
import Spinner from './Spinner'
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props) => {
    const [articles,setarticles]=useState([])
    const [loading,setloading]=useState(true)
    const [page,setpage]=useState(1)
    const [totalResults,settotalResults]=useState(0)
    const updateNews=async () => {
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json()
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)

    }
    useEffect(() => {
        updateNews()
    },[])
    let pageNo=0;
    const fetchMoreData=async () => {
        pageNo=page+1
        const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pageSize=${props.pageSize}`;
        let data=await fetch(url);
        let parsedData=await data.json()
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setpage(pageNo)
    }
    return (
        <>
            <h1 className="text-center" style={{ margin: '35px 0px',marginTop: '90px' }}>Top Headlines of today!</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length!==totalResults}
                loader={<Spinner />}>
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.title}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps={
    country: "in",
    pageSize: 6,
    category: 'general',
    totalResults: 0
}
News.propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
export default News