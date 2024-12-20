import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItems from './NewsItems'



export class News extends Component {
    static defaultProps = {
        country: 'in',
        category:'general',
    }
    static propTypes = {
        country: PropTypes.string,
        category:PropTypes.string,

    }
   capitalFirstLetter = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
   
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
        document.title = `${this.capitalFirstLetter(this.props.category)} - NewsMonk`;
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aed1bbb645384147a282e21571712446`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }
    handlePrev= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aed1bbb645384147a282e21571712446&page=${this.state.page-1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
       
        
        this.setState({
            page:this.state.page-1,
            articles: parsedData.articles
            
        })

    }
    handleNext=async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=aed1bbb645384147a282e21571712446&page=${this.state.page+1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
       
        
        this.setState({
            page:this.state.page+1,
            articles: parsedData.articles
            
        })

    }
  render() {
    return (
      <div className = "container my-3  ">
        <h2>NewsMonk - Top Headlines </h2>
        
            
        <div className="row">
        {this.state.articles.map((element)=>{
        return <div className="col-md-3 " key ={element.url} >
           <NewsItems  title = {element.title? element.title.slice(0,45):""} description = {element.description?element.description.slice(0,80):""} imageUrl = {element.urlToImage} 
           newsUrl = {element.url} author={element.author} date = {element.publishedAt} source =  {element.source.name} />
       </div>
        })}
        </div>
        
        <div className="container d-flex justify-content-between mt-4">
        <button disabled = {this.state.page<=1} type="button" class="btn btn-dark" onClick= {this.handlePrev}> &larr; Prev</button>
        <button type="button" class="btn btn-dark" onClick= {this.handleNext}>Next &rarr;</button>

        </div>
        
      </div>
    )
  }
}

export default News
