import React, { Component } from "react";

export class NewsItem extends Component {
  getTimeAgo = (publishedAt) => {
    const now = new Date();
    const publisedDate = new Date(publishedAt);
    const diffMs = now - publisedDate;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffHours < 1) {
      return {
        label: `${diffMins} minutes ago`,
        className: "bg-green-100 text-green-800 border-green-400",
      };
    } else if (diffHours < 12) {
      return {
        label: `${diffHours} hours ago`,
        className: "bg-yellow-100 text-yellow-800 border-yellow-400",
      };
    } else if (diffDays < 2) {
      return {
        label: `${diffDays} day${diffDays > 1 ? "s" : ""} ago`,
        className: "bg-orange-100 text-orange-800 border-orange-400",
      };
    } else {
      return {
        label: "Old",
        className: "bg-gray-100 text-gray-800 border-gray-400",
      };
    }
  };
  render() {
    let { title, description, urlToImage, newsUrl, publishedAt } = this.props;
    return (
      <div>
        <div className="card max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href={urlToImage} target="_blank">
            <img className="rounded-t-lg" src={urlToImage} alt="" />
          </a>
          <div className="card-body p-5">
            <a href={newsUrl} target="_blank">
              <h5 className="card-title mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {title}
              </h5>
            </a>
            <p className="card-text mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            {(() => {
              const { label, className } = this.getTimeAgo(publishedAt);
              return (
                <span
                  className={`text-sm font-bold me-2 px-2.5 py-0.5 rounded-sm border ${className} dark:bg-gray-200`}
                >
                  {label}
                </span>
              );
            })()}
            <div className="flex flex-wrap items-center mt-2">
              <a
                href={newsUrl}
                target="_blank"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <span className="text-white text-xs font-medium bg-gray-500 px-3 py-2 border rounded-lg ml-3 mt-2 lg:mt-0">
                {new Date(publishedAt).toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
