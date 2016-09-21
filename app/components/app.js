import React, { Component } from 'react'
import axios from 'axios'

import Tile from './tile'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgSrc: 'http://lorempicsum.com/futurama/450/450/1',
      grid: [],
      row: [],
      size: 3
    }
  }
  randomNumber() {
    this.setState({
      imgSrc: this.state.imgSrc.replace(/.$/, Math.floor(Math.random() * 9) + 1)
    })
  }
  startGame() {
    console.log('noice')
  }
  render() {
    return (
      <div className="container">
        <div>
          <img src={this.state.imgSrc}/>
        </div>
        <div>
          <button onClick={this.startGame.bind(this)}>Ready</button>
          <button onClick={this.randomNumber.bind(this)}>Next Image</button>
        </div>
        <div className="game">
          <Tile img={this.state.imgSrc} posx="0" posy="0" />
          <Tile img={this.state.imgSrc} posx="1" posy="0" />
          <Tile img={null} posx="2" posy="0" />

          <Tile img={this.state.imgSrc} posx="0" posy="1" />
          <Tile img={this.state.imgSrc} posx="1" posy="1" />
          <Tile img={this.state.imgSrc} posx="2" posy="1" />

          <Tile img={this.state.imgSrc} posx="0" posy="2" />
          <Tile img={this.state.imgSrc} posx="1" posy="2" />
          <Tile img={this.state.imgSrc} posx="2" posy="2" />
        </div>
      </div>
    )
  }
}
