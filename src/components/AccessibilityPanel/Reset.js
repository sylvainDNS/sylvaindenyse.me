import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import { actions, useThemeDispatch } from '../ThemeProvider/context'

const Reset = () => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.resetFont())
  }

  return (
    <Wrapper onClick={handleClick}>
      <FontAwesomeIcon icon={faRotateLeft} />
      Réinitialiser la police par défaut
    </Wrapper>
  )
}

const Wrapper = styled.button`
  font-size: ${13 / 19}rem;
`

export default Reset
