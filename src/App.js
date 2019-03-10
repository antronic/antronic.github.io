import React, { Component } from 'react'
import styled from 'styled-components'

import MainElement from '@comps/MainElement'
import Story from '@comps/Story'

import './App.css'

const MainWrapper = styled.div`
  width: 90%;
  height: 90%;

  margin: 0 auto;
  /* background: #FAFDFF; */
  background: #FFE5E6;
`
const HTMLDiv = styled.span`
  color: #FAFAFA;
`

class App extends Component {
  render() {
    return (
      <>
        <HTMLDiv>{'<div id="root">'}</HTMLDiv>
        <MainWrapper>
          <Story/>
        </MainWrapper>
        <HTMLDiv>{'</div>'}</HTMLDiv>
      </>
    )
  }
}

export default App;
