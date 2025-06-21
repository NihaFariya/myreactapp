import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src="https://imageio.forbes.com/specials-images/imageserve/66486b007d11c61341e2d7a1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ title}</h5>
    <p className="card-text">{description}</p>
    <a href="/newsItem" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
