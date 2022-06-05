import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import VisuallyHidden from '../VisuallyHidden'

const ToggleButton = ({ 'aria-hidden': isHidden, ...delegated }) => (
  <Wrapper aria-hidden={isHidden} tabIndex={isHidden ? -1 : 2} {...delegated}>
    <FontAwesomeIcon icon={faUniversalAccess} size="xl" />
    <span aria-hidden="true">Accessibilité</span>
    <VisuallyHidden>
      Afficher les fonctionnalités d&apos;accessibilité
    </VisuallyHidden>
  </Wrapper>
)

const Wrapper = styled.button`
  grid-area: toggle-button;
  grid-template-columns: 30px 1fr;
  height: 140px;
  border-radius: 0 4px 4px 0;
  writing-mode: sideways-rl;
`

ToggleButton.propTypes = {
  'aria-hidden': PropTypes.bool,
}

export default ToggleButton
