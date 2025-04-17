import React, { Component, createContext } from 'react'

export const SearchContext = createContext();

export class SearchProvider extends Component {
    constructor(){
        super();
        this.state= {
            searchValue: "",
            setSearchValue: (value) => this.setState({ searchValue: value })
        }
    };

  render() {
    return (
      <SearchContext.Provider value={this.state}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

