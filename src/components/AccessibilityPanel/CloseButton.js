import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import VisuallyHidden from '../VisuallyHidden'

const hideLabel = "Masquer les fonctionnalités d'accessibilité"

const CloseButton = ({ 'aria-hidden': isHidden, ...delegated }) => (
  <Wrapper
    title={hideLabel}
    aria-hidden={isHidden}
    tabIndex={-Number(isHidden)}
    {...delegated}
  >
    <FontAwesomeIcon icon={faXmark} size="2x" />
    <VisuallyHidden>{hideLabel}</VisuallyHidden>
  </Wrapper>
)

const Wrapper = styled.button`
  position: absolute;
  top: 10px;
  right: 40px;
`

CloseButton.propTypes = {
  'aria-hidden': PropTypes.bool,
}

export default CloseButton
