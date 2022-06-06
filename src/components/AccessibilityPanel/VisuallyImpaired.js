import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons'
import {
  actions,
  selectors,
  useThemeDispatch,
  useThemeSelector,
} from '../ThemeProvider/context'
import VisuallyHidden from '../VisuallyHidden'
import styled from '@emotion/styled'

const VisuallyImpaired = props => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.toggleVisuallyImpairedFont())
  }

  const isVisuallyImpairedFont = useThemeSelector(
    selectors.isVisuallyImpairedFont
  )

  return (
    <Wrapper
      id="visually-impaired"
      onClick={handleClick}
      aria-pressed={isVisuallyImpairedFont}
      {...props}
    >
      <FontAwesomeIcon icon={faEyeLowVision} />
      <VisuallyHidden>{enableLabel}</VisuallyHidden>
      <span aria-hidden="true">
        {isVisuallyImpairedFont ? disableLabel : enableLabel}
      </span>
    </Wrapper>
  )
}

const getLabel = verb => `${verb} la police d'écriture pour malvoyant`
const enableLabel = getLabel('Activer')
const disableLabel = getLabel('Désactiver')

const Wrapper = styled.button`
  font-family: var(--font-family-luciole);
`

export default VisuallyImpaired
