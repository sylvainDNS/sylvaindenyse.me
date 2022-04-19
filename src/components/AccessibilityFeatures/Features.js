import React, { memo } from 'react'
import styled from '@emotion/styled'
import VisuallyImpaired from './VisuallyImpaired'
import Dyslexic from './Dyslexic'
import Reset from './Reset'

const Features = () => (
  <Wrapper>
    <ul>
      <li>
        <VisuallyImpaired />
      </li>
      <li>
        <Dyslexic />
      </li>
      <li>
        <Reset />
      </li>
    </ul>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  background-color: var(--color-background-light);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

export default memo(Features)
