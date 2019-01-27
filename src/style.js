import styled from 'styled-components'

export const StyleBase = styled.div`
  max-width: 450px;
  margin: 15vh auto 0;
  color: rgb(46, 68, 78);
`

export const Tile = styled.div`
  height: 150px;
  width: 150px;
  background: ${props => props.bg};
  background-position-x: ${props => props.positionX * 2 * 150}px;
  background-position-y: ${props => props.positionY * 2 * 150}px;
`

export const Row = styled.div`
  display: flex;
`
