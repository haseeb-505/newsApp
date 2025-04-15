import React, { Component } from 'react'
import spinner from '../images/Spinner.gif';


export class Spinner extends Component {
  render() {
    return (
      <div className='flex justify-center items-center'>
        <img src={spinner} alt="Loading..." />
      </div>
    )
  }
}

export default Spinner

