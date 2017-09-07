'use strict'
import React from 'react'
import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div>
        <Title name='Foo' lastname='Bar' />
      </div>
    )
  }
})

export default App
