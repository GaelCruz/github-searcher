import React from 'react'

function About() {
  return (
    <div>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search Github profiles and see profiles details.
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-grat-400'>
        Layout By:
        <a className='text-white pl-1' href="https://twitter.com/hassibmoddasser">Hassib Moddasser</a>
      </p>
    </div>
  )
}

export default About
