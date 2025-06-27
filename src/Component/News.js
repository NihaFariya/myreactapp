import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    console.log("I am constructor");
    this.apiKey = 'f9b6a344d9bf49729d30d0c1a7e51beb'; // Move API key here
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${this.apiKey}`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  handlePrevClick = async () => {
    if (this.state.page <= 1) return;
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page - 1}&apiKey=${this.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&page=${this.state.page + 1}&apiKey=${this.apiKey}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsHotDog - Top Headlines</h2>
        <div className="row">
          {this.state.articles && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
