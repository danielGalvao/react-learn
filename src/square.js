'use strict'

import React from 'react'

const Square = ({ color, children }) => (
  <div style={{
    backgroundColor: color,
    height: '100px',
    width: '100px'
  }} onClick={() => {
    alert('clicou no ' + color)
  }}>
    {children}
  </div>
)

Square.defaultProps = {
  color: 'red'
}

export default Square
