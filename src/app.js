'use strict'
import React from 'react'
import Square from './square'
import Button from './button'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
  }
  render () {
    return (
      <div className='container'>
        <Square color={this.state.color} />
        {['green', 'yellow', 'pink', 'green'].map((color) => (
          <Button text={color} handleClick={() => this.setState({ color })} />
        ))}
      </div>
    )
  }
}

export default App
