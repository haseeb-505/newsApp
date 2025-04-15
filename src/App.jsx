import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'
const newsApiKey = import.meta.env.VITE_NEWS_API_KEY;


export default class App extends Component {
  render() {
    return (
      <div>
        {/* In this app, we'll use React Class based components. */}
        <NavBar />
        <Routes>
          <Route path="/" element={<News key={"/general"} pageSize={20} category={"general"}/>}/>
          <Route path="/business" element={<News key={"/business"} pageSize={20} category={"business"}/>}/>
          <Route path="/entertainment" element={<News key={"/entertainment"} pageSize={20} category={"entertainment"}/>}/>
          <Route path="/health" element={<News key={"/health"} pageSize={20} category={"health"}/>}/>
          <Route path="/science" element={<News key={"/science"} pageSize={20} category={"science"}/>}/>
          <Route path="/sports" element={<News key={"/sports"} pageSize={20} category={"sports"}/>}/>
          <Route path="/technology" element={<News key={"/technology"} pageSize={20} category={"technology"}/>}/>
        </Routes>
      </div>
    )
  }
}
