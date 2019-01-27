import React, { Component } from 'react'

import { StyleBase, Tile, Row } from './style'

class App extends Component {
  state = {
    img: 'https://picsum.photos/450',
    emptyTileX: 0,
    emptyTileY: 2
  }

  handleControl = (e) => {
    const { emptyTileX, emptyTileY } = this.state

    switch (e.keyCode) {
      case 37: // RIGHT
        if (emptyTileY === 2) {
          break
        } else {
          const element = this[`x${emptyTileX}-y${emptyTileY + 1}`]
          const elementPositionX = window.getComputedStyle(element).backgroundPositionX
          const elementPositionY = window.getComputedStyle(element).backgroundPositionY

          this.setState({emptyTileY: emptyTileY + 1}, () => {
            const emptyElement = this[`x${this.state.emptyTileX}-y${this.state.emptyTileY - 1}`]
            emptyElement.style['background-position-x'] = elementPositionX
            emptyElement.style['background-position-y'] = elementPositionY
          })
          break;
        }

      case 38: // UP
        if (emptyTileX === 2) {
          break
        } else {
          const element = this[`x${emptyTileX + 1}-y${emptyTileY}`]
          const elementPositionX = window.getComputedStyle(element).backgroundPositionX
          const elementPositionY = window.getComputedStyle(element).backgroundPositionY

          this.setState({emptyTileX: emptyTileX + 1}, () => {
            const emptyElement = this[`x${this.state.emptyTileX - 1}-y${this.state.emptyTileY}`]
            emptyElement.style['background-position-x'] = elementPositionX
            emptyElement.style['background-position-y'] = elementPositionY
          })
          break;
        }

      case 39: // LEFT
        if (emptyTileY === 0) {
          break
        } else {
          const element = this[`x${emptyTileX}-y${emptyTileY - 1}`]
          const elementPositionX = window.getComputedStyle(element).backgroundPositionX
          const elementPositionY = window.getComputedStyle(element).backgroundPositionY

          this.setState({emptyTileY: emptyTileY - 1}, () => {
            const emptyElement = this[`x${this.state.emptyTileX}-y${this.state.emptyTileY + 1}`]
            emptyElement.style['background-position-x'] = elementPositionX
            emptyElement.style['background-position-y'] = elementPositionY
          })
          break;
        }

      case 40: // DOWN
        if (emptyTileX === 0) {
          break
        } else {
          const element = this[`x${emptyTileX - 1}-y${emptyTileY}`]
          const elementPositionX = window.getComputedStyle(element).backgroundPositionX
          const elementPositionY = window.getComputedStyle(element).backgroundPositionY

          this.setState({emptyTileX: emptyTileX - 1}, () => {
            const emptyElement = this[`x${this.state.emptyTileX + 1}-y${this.state.emptyTileY}`]
            emptyElement.style['background-position-x'] = elementPositionX
            emptyElement.style['background-position-y'] = elementPositionY
          })
          break;
        }

      default:
        break;
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleControl)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleControl)
  }

  render() {
    const { emptyTileX, emptyTileY, img } = this.state
    return (
      <StyleBase>
        <h1>Hola!</h1>
        <div>
          {[0, 1, 2].map(i => (
            <Row key={i}>
              {[0, 1, 2].map(j => (
                <Tile
                  ref={el => this[`x${i}-y${j}`] = el}
                  key={`x${i}-y${j}`}
                  bg={
                    i === emptyTileX && j === emptyTileY ? '#e2e2e2' : `url(${img})`
                  }
                  positionX={j}
                  positionY={i}
                />
              ))}
            </Row>
          ))}
        </div>
      </StyleBase>
    )
  }
}

export default App
