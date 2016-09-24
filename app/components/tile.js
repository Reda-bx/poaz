import React, { Component } from 'react'

export default class Tile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const imgSrc = this.props.img
    let style = {
      backgroundPositionX: `${this.props.posx * 2 * 150}px`,
      backgroundPositionY: `${this.props.posy * 2 * 150}px`,
      height: '150px',
      width: '150px'
    }
    if (imgSrc) {
      style.backgroundImage = `url(${this.props.img})`
    } else {
      style.backgroundColor = '#ccc'
    }
    return (
      <div id={this.props.id} className="tiles" style={style}></div>
    )
  }
}
