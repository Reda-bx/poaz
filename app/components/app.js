import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {file: '', imagePreviewUrl: ''}
  }
  render() {
    return (
      <div className="app">
        <h1>YO</h1>
      </div>
    )
  }
}
