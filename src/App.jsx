import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* In this app, we'll use React Class based components. */}
        <NavBar />
        <News pageSize={20}/>
      </div>
    )
  }
}
