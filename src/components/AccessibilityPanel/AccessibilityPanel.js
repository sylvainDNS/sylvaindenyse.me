import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'
import FocusTrap from 'focus-trap-react'
import { useMediaQuery } from '@react-hook/media-query'
import Features from './Features'
import Portal from '../Portal'
import ToggleButton from './ToggleButton'
import CloseButton from './CloseButton'

const maxWidth = '500px'

const AccessibilityPanel = () => {
  const [showFeatures, setShowFeatures] = useState(false)

  const matches = useMediaQuery(`only screen and (max-width: ${maxWidth})`)

  const displayCloseButton = showFeatures && matches
  const displayToggleButton = !showFeatures || !displayCloseButton

  const panelRef = useRef()
  const handleOutsideFocus = useCallback(() => setShowFeatures(false), [])
  useOutsideFocus(panelRef, handleOutsideFocus)

  const handleToggle = () => {
    setShowFeatures(bool => !bool)
  }

  const handleClose = () => {
    setShowFeatures(false)
  }

  const initialFocus = () => document.getElementById('visually-impaired')

  return (
    <Portal>
      <FocusTrap active={showFeatures} focusTrapOptions={{ initialFocus }}>
        <Wrapper
          ref={panelRef}
          isOpened={showFeatures}
          style={{ '--max-width': maxWidth }}
        >
          <Features aria-hidden={!showFeatures} />
          <ToggleButton
            onClick={handleToggle}
            aria-hidden={!displayToggleButton}
            aria-pressed={showFeatures}
          />
          {matches ? (
            <CloseButton
              onClick={handleClose}
              aria-hidden={!displayCloseButton}
            />
          ) : null}
        </Wrapper>
      </FocusTrap>
    </Portal>
  )
}

const Wrapper = styled.div`
  --panel-width: 400px;

  position: fixed;
  top: 0;
  bottom: 0;
  left: calc(var(--panel-width) * -1);

  display: grid;
  grid-template-areas: 'features toggle-button';
  grid-template-columns: var(--panel-width) 30px;
  align-items: center;

  font-size: ${13 / 19}rem;
  color: var(--color-text);

  transform: translateX(${p => (p.isOpened ? 'var(--panel-width)' : 0)});

  button {
    display: grid;
    gap: 10px;
    align-items: center;
    justify-items: center;
    color: inherit;
    background-color: var(--color-background-light);
    border: none;

    &:hover,
    &:focus {
      font-weight: var(--font-weight-medium);
      color: var(--color-button-hover);
    }

    @media (prefers-reduced-motion: no-preference) {
      transition: color 0.3s ease-out;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.3s ease-out;
  }

  @media (max-width: ${maxWidth}) {
    --panel-width: 100vw;
  }
`

export default AccessibilityPanel

const useOutsideFocus = (ref, callback) => {
  useEffect(() => {
    const onMouseDown = e => {
      if (!ref.current) return

      if (!ref.current.contains(e.target)) callback?.()
    }
    const onKeyDown = e => {
      if (e.key === 'Escape') callback?.()
    }

    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [ref, callback])
}
