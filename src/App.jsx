import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'
const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;


export default class App extends Component {
  pageSize = 20;
  render() {
    return (
      <div>
        {/* In this app, we'll use React Class based components. */}
        <NavBar />
        <Routes>
          <Route path="/" element={<News key={"/general"} pageSize={this.pageSize} category={"general"}/>}/>
          <Route path="/business" element={<News key={"/business"} pageSize={this.pageSize} category={"business"}/>}/>
          <Route path="/entertainment" element={<News key={"/entertainment"} pageSize={this.pageSize} category={"entertainment"}/>}/>
          <Route path="/health" element={<News key={"/health"} pageSize={this.pageSize} category={"health"}/>}/>
          <Route path="/science" element={<News key={"/science"} pageSize={this.pageSize} category={"science"}/>}/>
          <Route path="/sports" element={<News key={"/sports"} pageSize={this.pageSize} category={"sports"}/>}/>
          <Route path="/technology" element={<News key={"/technology"} pageSize={this.pageSize} category={"technology"}/>}/>
          
        </Routes>
      </div>
    )
  }
}
