'use strict'
import React, { Component } from 'react'

class App extends Component {
  constructor () {
    super()
    this.state = {
      value: 'Valor inicial'
    }
  }
  render () {
    return (
      <div>
        <form>
          <input type='text' value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
        </form>
        <h1>{this.state.value}</h1>
      </div>
    )
  }
}

export default App
