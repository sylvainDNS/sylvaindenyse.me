import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import Features from './Features'
import Portal from '../Portal'

const AccessibilityPanel = () => {
  const [showFeatures, setShowFeatures] = useState(false)

  const handleToggle = () => {
    setShowFeatures(bool => !bool)
  }

  const leftPosition = showFeatures ? 0 : '-350px'

  return (
    <Portal>
      <Wrapper style={{ '--left': leftPosition }}>
        <Button onClick={handleToggle}>
          <FontAwesomeIcon icon={faUniversalAccess} size="xl" />
          Accessibilité
        </Button>
        <Features />
      </Wrapper>
    </Portal>
  )
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: var(--left);

  display: grid;
  grid-template-areas: 'features toggle-button';
  grid-template-columns: 350px 30px;
  align-items: center;

  font-size: ${16 / 19}rem;
  color: var(--color-text);

  button {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    justify-items: center;

    color: inherit;
    background-color: var(--color-background-light);

    border: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: left 0.3s ease-out;
  }
`

const Button = styled.button`
  grid-area: toggle-button;
  height: 140px;
  border-radius: 0 4px 4px 0;
  writing-mode: sideways-rl;
`

export default AccessibilityPanel
