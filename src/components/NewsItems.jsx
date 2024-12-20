import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class NewsItems extends Component {
   
 
  render() {
    let {title,description,imageUrl,newsUrl, author, date,source} = this.props;
    return (

      <div className = "my-3">
        <div className="card" style={{width: "18rem"}}>
        <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style = {{left:"90%", zIndex:'1'}}>
                 {source}
        </span>
            <img src={!imageUrl?"https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-12/241217-Joseph-Corcoran-al-1352-0cd219.jpg"
            : imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                 <h5 className="card-title">{title}...
                 
                 </h5>
                 <p className="card-text">{description}...</p>
                 <p className="card-text"><small className="text-body-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
     
            <a href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
        
    </div>
    )
  }
}

export default NewsItems
