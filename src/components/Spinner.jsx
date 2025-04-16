import React from 'react'
import spinner from '../images/Spinner.gif';


const Spinner = () => {
    return (
      <div className='flex justify-center items-center'>
        <img src={spinner} alt="Loading..." />
      </div>
    )
}

export default Spinner

