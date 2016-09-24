import React, { Component } from 'react'

import Tile from './tile'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pic: ['futurama', 'nemo', 'rio', 'up', 'simpsons'],
      imgSrc: 'http://lorempicsum.com/futurama/450/450/1',
      blockedX: 0,
      blockedY: 2
    }
  }
  randomNumber() {
    this.setState({
      imgSrc: `http://lorempicsum.com/${this.state.pic[Math.floor(Math.random() * 4) + 1]}/450/450/${Math.floor(Math.random() * 9) + 1}`,
      blockedX: 0,
      blockedY: 2
    })
  }
  startGame() {
    console.log('noice')
  }
  handleButtonPress(e) {
    switch (e.keyCode) {
      case 37: // RIGHT

        if (this.state.blockedY === 2) {
          break
        } else {
          let x = document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY + 1) +'').style['background-position-x']
          let y = document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY + 1) +'').style['background-position-y']

          this.setState({blockedY: this.state.blockedY + 1})

          document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY - 1) +'').style['background-position-x'] = x
          document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY - 1) +'').style['background-position-y'] = y
          break
        }
      case 38: // UP
        if (this.state.blockedX === 2) {
          break
        } else {
          let x = document.getElementById('x'+ (this.state.blockedX + 1) +'y'+ (this.state.blockedY) +'').style['background-position-x']
          let y = document.getElementById('x'+ (this.state.blockedX + 1) +'y'+ (this.state.blockedY) +'').style['background-position-y']

          this.setState({blockedX: this.state.blockedX + 1})

          document.getElementById('x'+ (this.state.blockedX - 1) +'y'+ (this.state.blockedY) +'').style['background-position-x'] = x
          document.getElementById('x'+ (this.state.blockedX - 1) +'y'+ (this.state.blockedY) +'').style['background-position-y'] = y
          break
        }
      case 39: // LEFT
        if (this.state.blockedY === 0) {
          break
        } else {
          let x = document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY - 1) +'').style['background-position-x']
          let y = document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY - 1) +'').style['background-position-y']

          this.setState({blockedY: this.state.blockedY - 1})

          document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY + 1) +'').style['background-position-x'] = x
          document.getElementById('x'+ (this.state.blockedX) +'y'+ (this.state.blockedY + 1) +'').style['background-position-y'] = y
          break
        }
      case 40: // DOWN
        if (this.state.blockedX === 0) {
          break
        } else {
          let x = document.getElementById('x'+ (this.state.blockedX - 1) +'y'+ (this.state.blockedY) +'').style['background-position-x']
          let y = document.getElementById('x'+ (this.state.blockedX - 1) +'y'+ (this.state.blockedY) +'').style['background-position-y']

          this.setState({blockedX: this.state.blockedX - 1})

          document.getElementById('x'+ (this.state.blockedX + 1) +'y'+ (this.state.blockedY) +'').style['background-position-x'] = x
          document.getElementById('x'+ (this.state.blockedX + 1) +'y'+ (this.state.blockedY) +'').style['background-position-y'] = y
          break
        }
    }
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleButtonPress.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleButtonPress.bind(this))
  }
  renderGame() {
    let tiles = []
    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        if (i === this.state.blockedX && j === this.state.blockedY) {
          tiles.push(<Tile id={`x${i}y${j}`} key={`x${i}y${j}`} img={null} posx={j} posy={i} />)
        } else {
          tiles.push(<Tile id={`x${i}y${j}`} key={`x${i}y${j}`} img={this.state.imgSrc} posx={j} posy={i} />)
        }
      }
    }
    return (
      <div>
        {tiles}
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <div>
          <button onClick={this.startGame.bind(this)}>Ready</button>
          <button onClick={this.randomNumber.bind(this)}>Next Image</button>
        </div>
        <div className="game">
          {this.renderGame()}
        </div>
      </div>
    )
  }
}
