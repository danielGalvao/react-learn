'use strict'
import React from 'react'
import Square from './square'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {['green', 'yellow', 'pink', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

export default App
