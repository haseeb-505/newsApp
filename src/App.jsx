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
          <Route key={"/general"} path="/" element={<News pageSize={20} category={"general"}/>}/>
          <Route key={"/business"} path="/business" element={<News pageSize={20} category={"business"}/>}/>
          <Route key={"/entertainment"} path="/entertainment" element={<News pageSize={20} category={"entertainment"}/>}/>
          <Route key={"/health"} path="/health" element={<News pageSize={20} category={"health"}/>}/>
          <Route key={"/science"} path="/science" element={<News pageSize={20} category={"science"}/>}/>
          <Route key={"/sports"} path="/sports" element={<News pageSize={20} category={"sports"}/>}/>
          <Route key={"/technology"} path="/technology" element={<News pageSize={20} category={"technology"}/>}/>
        </Routes>
      </div>
    )
  }
}
