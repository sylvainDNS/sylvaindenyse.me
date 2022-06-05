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

const VisuallyImpaired = props => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.toggleVisuallyImpairedFont())
  }

  const isVisuallyImpairedFont = useThemeSelector(
    selectors.isVisuallyImpairedFont
  )

  return (
    <button
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
    </button>
  )
}

const getLabel = verb => `${verb} la police d'écriture pour malvoyant`
const enableLabel = getLabel('Activer')
const disableLabel = getLabel('Désactiver')

export default VisuallyImpaired
