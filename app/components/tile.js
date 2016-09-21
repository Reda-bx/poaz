import React, { Component } from 'react'

export default class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let imgSrc = this.props.img
    let style = {
      backgroundImage: `url(${imgSrc})`,
      backgroundPositionX: `${this.props.posx * 2 * 150}px`,
      backgroundPositionY: `${this.props.posy * 2 * 150}px`,
      height: '150px',
      width: '150px'
    }
    return (
      <div style={style}></div>
    )
  }
}
