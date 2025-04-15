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
        label: `${diffMins} minutes`,
        className: "bg-green-100 text-green-800 border-green-400",
      };
    } else if (diffHours < 12) {
      return {
        label: `${diffHours} hrs`,
        className: "bg-yellow-100 text-yellow-800 border-yellow-400",
      };
    } else if (diffDays < 2) {
      return {
        label: `${diffDays}d`,
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
    let {
      title,
      description,
      urlToImage,
      newsUrl,
      publishedAt,
      author,
      source,
    } = this.props;
    return (
      <div>
        <div className="card max-w-lg bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href={urlToImage} target="_blank">
            <img className="rounded-t-lg" src={urlToImage} alt="" />
          </a>
          <div className="card-body py-2 px-4">
            <div className="flex items-center justify-between gap-0.75 mb-2">
              <a
                href={newsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {title}
                </h5>
              </a>
              <span
                className={`text-xs font-bold px-1.5 py-1 rounded-sm border ${
                  this.getTimeAgo(publishedAt).className
                } dark:bg-gray-200`}
              >
                {this.getTimeAgo(publishedAt).label}
              </span>
            </div>
            <p className="card-text mb-3 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-300 text-sm font-medium px-2 py-1 ml-0.5 mt-2 lg:mt-0">
                By <span className="font-bold">{author ? author : "N/A"}</span>{" "}
                at {new Date(publishedAt).toLocaleString()}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-between mt-2">
              <a
                href={newsUrl}
                target="_blank"
                className="inline-flex items-center px-2 py-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              <span className="text-white px-2 py-1 text-sm font-medium bg-gray-500 border rounded-lg ml-3 mt-2 lg:mt-0 ">
                {source.slice(0, 20)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
