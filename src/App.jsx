import React from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const pageSize = 20;
    return (
      <div>
        {/* In this app, we'll use React Class based components. */}
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<News key={"/"} pageSize={pageSize} category={"general"}/>}/>
          <Route path="/general" element={<News key={"/general"} pageSize={pageSize} category={"general"}/>}/>
          <Route path="/business" element={<News key={"/business"} pageSize={pageSize} category={"business"}/>}/>
          <Route path="/entertainment" element={<News key={"/entertainment"} pageSize={pageSize} category={"entertainment"}/>}/>
          <Route path="/health" element={<News key={"/health"} pageSize={pageSize} category={"health"}/>}/>
          <Route path="/science" element={<News key={"/science"} pageSize={pageSize} category={"science"}/>}/>
          <Route path="/sports" element={<News key={"/sports"} pageSize={pageSize} category={"sports"}/>}/>
          <Route path="/technology" element={<News key={"/technology"} pageSize={pageSize} category={"technology"}/>}/> */}
        </Routes>
      </div>
    )
}

export default App;
