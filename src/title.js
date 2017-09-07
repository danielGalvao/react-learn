'use strict'

import React from 'react'

const Title = ({name, lastname}) => (
  <h1>Olá {`${name} ${lastname}`}</h1>
)

// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       'name': 'Daniel',
//       'lastname': 'Galvão'
//     }
//   },
//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastname}</h1>
//     )
//   }
// })

export default Title
