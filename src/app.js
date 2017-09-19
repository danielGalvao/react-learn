'use strict'
import React from 'react'
import Square from './square'
import Button from './button'

class App extends React.Component {
  render () {
    return (
     <div>
      <Square />
      <Button text='Vermelho'></Button>
     </div>
    )
  }
}

export default App
