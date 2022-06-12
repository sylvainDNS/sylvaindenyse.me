import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

/**
 * Largely inspired by https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
 */
const VisuallyHidden = ({ children, ...delegated }) => {
  const [forceShow, setForceShow] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      const handleKeyDown = e => {
        if (e.key === 'Alt' && e.ctrlKey) setForceShow(true)
      }
      const handleKeyUp = e => {
        if (e.key === 'Alt' && e.ctrlKey) setForceShow(false)
      }

      window.addEventListener('keydown', handleKeyDown)
      window.addEventListener('keyup', handleKeyUp)

      return () => {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
      }
    }
  }, [])

  if (forceShow) return children

  return <Wrapper {...delegated}>{children}</Wrapper>
}

const Wrapper = styled.span`
  position: absolute;
  display: inline-block;
  width: 1;
  height: 1;
  padding: 0;
  margin: -1;
  overflow: hidden;
  clip: rect(0 0 0 0);
  border: 0;
`

VisuallyHidden.propTypes = {
  children: PropTypes.node,
}
export default VisuallyHidden
