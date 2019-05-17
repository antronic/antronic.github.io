import React, { Component } from 'react'

import { connect } from 'react-redux'
import story from '@p5/story.p5'
import P5Wrapper from '@p5/wrapper'

class Story extends Component {render() {
    const { path } = this.props
    return (
      <>
        <P5Wrapper
          {...this.props}

          sketch={p5 => story(p5, { path })}
          style={{
            height: '100%',
            width: '100%',
          }}/>
      </>
    )
  }
}

const mapStateToProps = state => ({
  // Props for canvas
  canvas: {
    path: state.router.path,
  },

  path: state.router.path,
})

export default connect(mapStateToProps, null)(Story)