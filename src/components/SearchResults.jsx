import React, { Component } from 'react'
import NewsItem from './NewsItem.jsx'
import Spinner from './Spinner.jsx'
import { SearchContext } from "./SearchContext.jsx"

export class SearchResults extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
        this.apiKey = import.meta.env.VITE_NEWS_API_KEY;
    };

    static contextType = SearchContext;

    componentDidMount(){
        this.fetchSearchResults()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.context.searchValue !== prevState.prevSearchValue) {
            this.fetchSearchResults();
            this.setState({ prevSearchValue: this.context.searchValue });
        }
    };

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

    fetchSearchResults = async () => {
        const { searchValue } = this.context;
        if (!searchValue) {
            console.log("No search query sent")
            return;
        }
        try {
            this.setState({ loading: true });
            let url = `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=popularity&apiKey=${this.apiKey}`

            //* use the url given below to fetch news articles for certain time period
            // `https://newsapi.org/v2/everything?q=${this.state.searchValue}&from=2025-04-16&to=2025-04-16&sortBy=popularity&apiKey=${this.apiKey}`

            let response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let parsedData = await response.json();
            if (parsedData.status === "error") {
            console.log("Failed to fetch search new articles with this message: ", parsedData.message);
            }

            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            });
            
        } catch (error) {
            console.log("Error in search: ", error.message);
            this.setState({
                loading: false,
            });
        }
    };
  render() {
    const { searchValue } = this.context;
    const { articles, loading } = this.state;
    return (
        <div className="container mx-auto my-20">
        <h1 className="text-center font-bold">{searchValue ? `Search Results for: ${this.capitalizeFirstLetter(searchValue)}` : "NewsApp - Top Headlines"}</h1>
        {this.state.loading && <Spinner />}
            {!loading && articles.length === 0 && (
                        <p className="text-center mt-8">No articles found. Try a different search term.</p>
                    )}
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
        {/* <div className="flex justify-between">
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
        </div> */}
        
      </div>
    )
  }
}

export default SearchResults

