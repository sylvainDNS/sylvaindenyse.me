import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faA,
  faD,
  faE,
  faI,
  faL,
  faS,
  faX,
  faY,
} from '@fortawesome/free-solid-svg-icons'
import {
  actions,
  selectors,
  useThemeDispatch,
  useThemeSelector,
} from '../ThemeProvider/context'
import VisuallyHidden from '../VisuallyHidden'

const Dyslexic = props => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.toggleDyslexicFont())
  }

  const isDyslexicFont = useThemeSelector(selectors.isDyslexicFont)

  return (
    <Wrapper onClick={handleClick} aria-pressed={isDyslexicFont} {...props}>
      <IconStacker>
        <FontAwesomeIcon
          icon={faD}
          size="2xs"
          transform={{ rotate: 32, x: 3, y: -10 }}
        />
        <FontAwesomeIcon
          icon={faY}
          size="2xs"
          transform={{ rotate: 59, x: -2, y: 5 }}
        />
        <FontAwesomeIcon
          icon={faS}
          size="2xs"
          transform={{ rotate: -22, x: 1, y: -7 }}
        />
        <FontAwesomeIcon
          icon={faL}
          size="2xs"
          transform={{ rotate: 213, x: 1, y: -8 }}
        />
        <FontAwesomeIcon
          icon={faE}
          size="2xs"
          transform={{ rotate: 152, x: 6, y: -20 }}
        />
        <FontAwesomeIcon
          icon={faX}
          size="2xs"
          transform={{ rotate: 20, x: 6, y: -20 }}
        />
        <FontAwesomeIcon
          icon={faI}
          size="2xs"
          transform={{ rotate: 98, x: 11, y: -30 }}
        />
        <FontAwesomeIcon
          icon={faA}
          size="2xs"
          transform={{ rotate: 198, x: 1, y: -17 }}
        />
      </IconStacker>
      <VisuallyHidden>{enableLabel}</VisuallyHidden>
      <span aria-hidden="true">
        {isDyslexicFont ? disableLabel : enableLabel}
      </span>
    </Wrapper>
  )
}

const getLabel = verb => `${verb} la police d'écriture pour dyslexique`
const enableLabel = getLabel('Activer')
const disableLabel = getLabel('Désactiver')

const Wrapper = styled.button`
  font-family: var(--font-family-opendyslexic);
`

const IconStacker = styled.span`
  width: 23.75px;
  height: 23.75px;
  font-size: ${13 / 19}rem;
`
IconStacker.defaultProps = { className: 'fa-stack' }

export default Dyslexic
