import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons'
import Boop from './boop'

const quotes = [
  'Fixing universe code',
  'Developing of my own clone',
  'Contributing to a safer web',
  'Climbing the wall of knowledge',
  'Making a PR on my life project',
  'Learning an exotic coding language',
  'Hacking my fridge',
]

const Wrapper = styled.div`
  position: relative;
`

const Sentence = styled.q`
  margin: 20px 0 0;
  font-size: 24px;
  font-weight: 400;
  font-family: 'Lato';
`

const Quote = () => {
  const getRandom = () => Math.floor(Math.random() * quotes.length)
  const [random, setRandom] = useState(getRandom())

  const handleClick = () => setRandom(getRandom())

  return (
    <Wrapper>
      <Sentence>{quotes[random]}</Sentence>
      <RefreshButton onClick={handleClick} />
    </Wrapper>
  )
}

const Button = styled.button`
  position: absolute;
  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: 0;
  border-radius: 50%;

  &:hover {
    background-color: #e8e8e8;
    box-shadow: 0 3px 5px ${({ theme }) => theme.colors.shadow};
  }
`

const RefreshButton = props => (
  <Boop rotation={0} timing={150}>
    <Button {...props}>
      <FontAwesomeIcon icon={faRedoAlt} />
    </Button>
  </Boop>
)

export default Quote
