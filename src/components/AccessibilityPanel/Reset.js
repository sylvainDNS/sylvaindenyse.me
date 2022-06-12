import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { actions, useThemeDispatch } from '../ThemeProvider/context'

const Reset = props => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.resetFont())
  }

  return (
    <button onClick={handleClick} {...props}>
      <FontAwesomeIcon icon={faRotateLeft} />
      Réinitialiser la police par défaut
    </button>
  )
}

export default Reset
