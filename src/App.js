import React, { Component } from 'react'
import styled from 'styled-components'

import './App.css'

const HTMLDiv = styled.span``

class App extends Component {
  render() {
    return (
      <>
        <span>{'<div id="root">'}</span>
        <div id="display">

        </div>
        <span>{'</div>'}</span>
      </>
    )
  }
}

export default App;
