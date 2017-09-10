'use strict'
import React from 'react'
import Square from './square'

class App extends React.Component {
  render () {
    return (
      <div className='container'>
        {['green', 'yellow', 'pink'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
    )
  }
}

export default App
