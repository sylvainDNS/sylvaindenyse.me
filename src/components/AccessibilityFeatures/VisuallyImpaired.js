import React, { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeLowVision } from '@fortawesome/free-solid-svg-icons'
import styled from '@emotion/styled'
import {
  actions,
  selectors,
  useThemeDispatch,
  useThemeSelector,
} from '../ThemeProvider/context'

const VisuallyImpaired = () => {
  const dispatch = useThemeDispatch()
  const handleClick = () => {
    dispatch(actions.toggleVisuallyImpairedFont())
  }

  const isVisuallyImpairedFont = useThemeSelector(
    selectors.isVisuallyImpairedFont
  )

  return (
    <Wrapper onClick={handleClick} aria-pressed={isVisuallyImpairedFont}>
      <FontAwesomeIcon icon={faEyeLowVision} />
      {isVisuallyImpairedFont ? 'Disable' : 'Enable'} specific font for visually
      impaired
    </Wrapper>
  )
}

const Wrapper = styled.button`
  font-size: ${13 / 19}rem;
`

export default memo(VisuallyImpaired)
