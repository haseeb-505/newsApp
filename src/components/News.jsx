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
      totalResults: 0,
    };
    this.apiKey = import.meta.env.VITE_NEWS_API_KEY;
  }

  async fetchNews(page) {
    try {
      this.setState({ loading: true });
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=${this.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      if (parsedData.status === "error") {
        throw new Error(parsedData.message || "Failed to fetch new articles.");
      }
      if (!parsedData.articles) {
        toast.error("No articles found for this query.");
      }
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        page: page,
        loading: false,
      });
    } catch (error) {
      toast.error(error.message);
      this.setState({
        error: error.message,
        loading: false,
        articles: [],
      });
    }
  }

  async componentDidMount() {
    await this.fetchNews(this.state.page);
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      await this.fetchNews(this.state.page - 1);
    }
  };

  handleNextClick = async () => {
    if (
      this.state.page + 1 <=
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      await this.fetchNews(this.state.page + 1);
    } else {
      toast.error("No more pages for this query");
    }
  };
  render() {
    return (
      <div className="container mx-auto my-3">
        <h1 className="text-center font-bold">NewsApp - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center sm:gap-6 p-4">
          {/* loop through the articles to show each of them in a card */}
          {!this.state.loading &&
            Array.isArray(this.state.articles) &&
            this.state.articles.map((element, index) => {
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
                    author={element.author}
                    source={element.source.name}
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
            className="text-white bg-blue-700 ml-5 disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
