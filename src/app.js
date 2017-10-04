'use strict'
import React from 'react'
import Timer from './timer'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render () {
    console.log('render')
    return (
      <div className='container'>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({showTimer: !this.state.showTimer})
        }}>Show / hide timer</button>
      </div>
    )
  }
}

export default App
