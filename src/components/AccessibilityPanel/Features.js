import React, { memo } from 'react'
import styled from '@emotion/styled'
import VisuallyImpaired from './VisuallyImpaired'
import Dyslexic from './Dyslexic'
import Reset from './Reset'

const features = [VisuallyImpaired, Dyslexic, Reset]

const Features = () => (
  <Wrapper>
    <ul>
      {features.map((Feature, index) => (
        <li key={index}>
          <Feature />
        </li>
      ))}
    </ul>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  background-color: var(--color-background-light);

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
`

export default memo(Features)
