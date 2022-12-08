import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='card danger p-5 m-5'>
      <h2>Ooops !!!</h2>
      <h3>The page is not found</h3>
      <hr></hr>
      <Link to="/">Back to homepage</Link>
    </div>
  )
}

export default NotFound