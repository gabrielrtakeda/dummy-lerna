import React, { Component } from 'react'
import compound from 'dummy-lerna-compound'
import fibonacci from 'dummy-lerna-fibonacci'

class App extends Component {
  render() {
    return (
      <table cellpadding='5' style={{ fontFamily: 'Arial' }}>
        <tr>
          <td><b>Compound Interest (3% for 30 days)</b></td>
          <td>{compound(100, 0.03, 30)}%</td>
        </tr>
        <tr>
          <td><b>Fibonacci (sum of 10 iterations)</b></td>
          <td>{fibonacci(10)}</td>
        </tr>
      </table>
    )
  }
}

export default App
