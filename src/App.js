import React, { Component } from 'react'

import { StyleBase, Tile, Row } from './style'

class App extends Component {
  state = {
    img: 'https://picsum.photos/450',
    emptyTileX: 0,
    emptyTileY: 2,
    swipe: {
      touchstartX: 0,
      touchstartY: 0,
      touchendX: 0,
      touchendY: 0
    }
  }

  moveDown = () => {
    const { emptyTileX, emptyTileY } = this.state

    if (emptyTileX === 0) {
      return
    } else {
      const element = this[`x${emptyTileX - 1}-y${emptyTileY}`]
      const elementPositionX = window.getComputedStyle(element)
        .backgroundPositionX
      const elementPositionY = window.getComputedStyle(element)
        .backgroundPositionY

      this.setState({ emptyTileX: emptyTileX - 1 }, () => {
        const emptyElement = this[
          `x${this.state.emptyTileX + 1}-y${this.state.emptyTileY}`
        ]
        emptyElement.style['background-position-x'] = elementPositionX
        emptyElement.style['background-position-y'] = elementPositionY
      })
      return
    }
  }

  moveUp = () => {
    const { emptyTileX, emptyTileY } = this.state

    if (emptyTileX === 2) {
      return
    } else {
      const element = this[`x${emptyTileX + 1}-y${emptyTileY}`]
      const elementPositionX = window.getComputedStyle(element)
        .backgroundPositionX
      const elementPositionY = window.getComputedStyle(element)
        .backgroundPositionY

      this.setState({ emptyTileX: emptyTileX + 1 }, () => {
        const emptyElement = this[
          `x${this.state.emptyTileX - 1}-y${this.state.emptyTileY}`
        ]
        emptyElement.style['background-position-x'] = elementPositionX
        emptyElement.style['background-position-y'] = elementPositionY
      })
      return
    }
  }

  moveRight = () => {
    const { emptyTileX, emptyTileY } = this.state
    
    if (emptyTileY === 0) {
      return
    } else {
      const element = this[`x${emptyTileX}-y${emptyTileY - 1}`]
      const elementPositionX = window.getComputedStyle(element)
        .backgroundPositionX
      const elementPositionY = window.getComputedStyle(element)
        .backgroundPositionY

      this.setState({ emptyTileY: emptyTileY - 1 }, () => {
        const emptyElement = this[
          `x${this.state.emptyTileX}-y${this.state.emptyTileY + 1}`
        ]
        emptyElement.style['background-position-x'] = elementPositionX
        emptyElement.style['background-position-y'] = elementPositionY
      })
      return
    }
  }

  moveLeft = () => {
    const { emptyTileX, emptyTileY } = this.state

    if (emptyTileY === 2) {
      return
    } else {
      const element = this[`x${emptyTileX}-y${emptyTileY + 1}`]
      const elementPositionX = window.getComputedStyle(element)
        .backgroundPositionX
      const elementPositionY = window.getComputedStyle(element)
        .backgroundPositionY

      this.setState({ emptyTileY: emptyTileY + 1 }, () => {
        const emptyElement = this[
          `x${this.state.emptyTileX}-y${this.state.emptyTileY - 1}`
        ]
        emptyElement.style['background-position-x'] = elementPositionX
        emptyElement.style['background-position-y'] = elementPositionY
      })
      return
    }
  }

  handleTouchStart = e => {
    const touchstartX = e.changedTouches[0].screenX
    const touchstartY = e.changedTouches[0].screenY

    this.setState({
      swipe: {
        ...this.state.swipe,
        touchstartX,
        touchstartY
      }
    })
  }

  handleTouchEnd = e => {
    const touchendX = e.changedTouches[0].screenX
    const touchendY = e.changedTouches[0].screenY

    this.setState({
      swipe: {
        ...this.state.swipe,
        touchendX,
        touchendY
      }
    }, () => {
      this.handleGestureControl()
    })
  }

  handleKeyBoardControl = ({ keyCode }) => {
    if (keyCode === 37) {
      this.moveLeft()
    }
    
    if (keyCode === 39) {
      this.moveRight()
    }
    
    if (keyCode === 38) {
      this.moveUp()
    }
    
    if (keyCode === 40) {
      this.moveDown()
    }
  }

  handleGestureControl = _ => {
    const {
      swipe: { touchstartX, touchstartY, touchendX, touchendY }
    } = this.state
    const x = Math.abs(touchendX - touchstartX)
    const y = Math.abs(touchendY - touchstartY)

    if (touchendX < touchstartX && x > y) {
      this.moveLeft()
    }
    
    if (touchendX > touchstartX && x > y) {
      this.moveRight()
    }
    
    if (touchendY < touchstartY && x < y) {
      this.moveUp()
    }
    
    if (touchendY > touchstartY && x < y) {
      this.moveDown()
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyBoardControl)
    window.addEventListener('touchstart', this.handleTouchStart)
    window.addEventListener('touchend', this.handleTouchEnd)
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyBoardControl)
    window.removeEventListener('touchstart', this.handleTouchStart)
    window.removeEventListener('touchend', this.handleTouchEnd)
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
                  ref={el => (this[`x${i}-y${j}`] = el)}
                  key={`x${i}-y${j}`}
                  bg={
                    i === emptyTileX && j === emptyTileY
                      ? '#e2e2e2'
                      : `url(${img})`
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
