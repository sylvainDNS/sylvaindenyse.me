import React, { useState } from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import Features from './Features'

const AccessibilityFeatures = () => {
  const [showFeatures, setShowFeatures] = useState(false)

  const handleToggle = () => {
    setShowFeatures(bool => !bool)
  }

  const leftPosition = showFeatures ? 0 : '-400px'

  return (
    <Wrapper style={{ '--left': leftPosition }}>
      <Button onClick={handleToggle}>
        <FontAwesomeIcon icon={faUniversalAccess} size="xl" />
        Accessibility features
      </Button>
      <Features />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  left: var(--left);
  top: 0;
  bottom: 0;
  display: grid;
  grid-template-columns: 400px 30px;
  grid-template-areas: 'features toggle-button';
  align-items: center;

  color: var(--color-text);
  font-size: ${16 / 19}rem;

  button {
    display: grid;
    grid-template-columns: 30px 1fr;
    align-items: center;
    justify-items: center;

    border: none;
    color: inherit;
    background-color: var(--color-background-light);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: left 0.3s ease-out;
  }
`

const Button = styled.button`
  grid-area: toggle-button;
  border-radius: 0 4px 4px 0;
  writing-mode: sideways-rl;
  height: 180px;
`

export default AccessibilityFeatures
