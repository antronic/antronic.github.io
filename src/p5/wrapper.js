import React, { Component } from 'react';
import p5 from 'p5';

export default class P5Wrapper extends Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);

    if (this.canvas.onDidMount) {
      this.canvas.onDidMount(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if (this.props.canvas !== newprops.canvas) {
      this.canvas.onPropsChange(newprops);
    }
  }

  render() {
    return <div ref={wrapper => this.wrapper = wrapper} style={this.props.style}></div>;
  }
}