'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    super()
    this.state = {
      time: 0
    }

    this.timer = 0
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000)
  }

  componentWillReceiveProps (nextProps) {
    console.log('componentWillRceiveProps', this.props, nextProps)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return <div> Timer: {this.state.time} </div>
  }
}

export default Timer
