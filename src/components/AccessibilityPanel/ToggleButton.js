import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import VisuallyHidden from '../VisuallyHidden'

const ToggleButton = ({ 'aria-hidden': isHidden, ...delegated }) => (
  <Wrapper aria-hidden={isHidden} tabIndex={isHidden ? -1 : 2} {...delegated}>
    <FontAwesomeIcon icon={faUniversalAccess} size="xl" />
    <Content aria-hidden="true">Accessibilité</Content>
    <VisuallyHidden>
      Afficher les fonctionnalités d&apos;accessibilité
    </VisuallyHidden>
  </Wrapper>
)

const Wrapper = styled.button`
  grid-area: toggle-button;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 30px;
  height: 160px;
  padding: 12px 0;
  border-radius: 0 4px 4px 0;
`

const Content = styled.span`
  grid-area: 2 / 1;
  transform: rotate(90deg);
`

ToggleButton.propTypes = {
  'aria-hidden': PropTypes.bool,
}

export default ToggleButton
