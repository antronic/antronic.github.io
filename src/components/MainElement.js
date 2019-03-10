import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import {
  PRIMARY,
  DARK,
  WHITE,
  SECONDARY,

  SHADOW_ALPHA,
  RGB,
} from '@vars/color'

const StyledMainElement = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #hi-text {
    color: ${PRIMARY};
    margin: 0;
    font-size: 9em;
    font-weight: 500;
  }
`

const StyledNameBox = styled.div`
  position: relative;
  padding: 0px 64px;

  border: 1.5px solid ${PRIMARY};
  box-shadow: 12px 12px 0px 1px rgba(${RGB.PRIMARY}, ${SHADOW_ALPHA});
  background: WHITE;

  p {
    font-size: 2em;
    & #subject{
      color: ${DARK}
    }
    & #my-name{
      color: ${SECONDARY}
    }
  }
`

const connerSize = '22'
const StyledConner = styled.div`
  position: absolute;

  width: ${connerSize}px;
  height: ${connerSize}px;

  ${
    ({ position }) => {
      if (!!position) {
        if (position === 'topRight')
          return css`
            top: -${connerSize / 2}px;
            right: -${connerSize / 2}px;
          `

        if (position === 'bottomLeft')
          return css`
            bottom: -${connerSize / 2}px;
            left: -${connerSize / 2}px;
          `
        if (position === 'bottomRight')
          return css`
            bottom: -${connerSize / 2}px;
            right: -${connerSize / 2}px;
          `
      }

      return css`
          top: -${connerSize / 2}px;
          left: -${connerSize / 2}px;
        `
      }
  }

  border-radius: 50%;

  content: '';
  background: ${PRIMARY};
`

class MainElement extends Component {
  render() {
    return (
      <StyledMainElement>
        <h1 id="hi-text">Hi!</h1>

        <StyledNameBox>
          <StyledConner/>
          <StyledConner position="topRight"/>
          <StyledConner position="bottomRight"/>
          <StyledConner position="bottomLeft"/>
          <p>
            <span id="subject">I'm </span>
            <span id="my-name">Jirachai Chansivanon</span>
          </p>
        </StyledNameBox>
      </StyledMainElement>
    )
  }
}

export default MainElement