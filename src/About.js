import React from 'react'
import GB from './assets/GB.jpg'

const About = () => {
  return (
    <div className='container'>
      <div className="card shadow rounded m-5 p-5 border-primary">
        <h4 className='display-3 text-center'>Gopal Bhattarai</h4>
        <img src={GB} />
      </div>
    </div>
  )
}

export default About
