import React, { Component } from "react";
import NewsItem from "./NewsItem.jsx";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "./Spinner.jsx";


export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = ` https://newsapi.org/v2/everything?q=cricket&apiKey=26b5f08e076e4756b97241995abf2378&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // set loading to true before fetching the data
    this.setState({ loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    // update the artcles state with the articles fetched from the API
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    let url = ` https://newsapi.org/v2/everything?q=cricket&apiKey=26b5f08e076e4756b97241995abf2378&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // update the artcles state with the articles fetched from the API
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
        toast.info("No more pages for this query");
    } else {
      let url = ` https://newsapi.org/v2/everything?q=cricket&apiKey=26b5f08e076e4756b97241995abf2378&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      // update the artcles state with the articles fetched from the API
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className="container mx-auto my-3">
        <h1 className="text-center font-bold">NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center sm:gap-6 p-4">
          {/* loop through the articles to show each of them in a card */}
          {!this.state.loading && this.state.articles.map((element, index) => {
            return (
              <div key={index}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 30) + "..." : ""
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 80) + "..."
                      : ""
                  }
                  urlToImage={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
                  }
                  newsUrl={element.url}
                  publishedAt={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        {/* previous and next button */}
        <div className="flex justify-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="text-white bg-blue-700 ml-5 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={this.handlePrevClick}
          >
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
              >
                <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z" />
              </svg>
              <span className="sr-only">Arrow key left</span>
            </kbd>
            Previous
          </button>
          <span className="text-center font-bold">Page: {this.state.page}</span>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={this.handleNextClick}
          >
            Next
            <kbd className="rtl:rotate-180 inline-flex items-center px-2 py-1.5">
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 10 16"
              >
                <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z" />
              </svg>
              <span className="sr-only">Arrow key right</span>
            </kbd>
          </button>
        </div>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}

export default News;
