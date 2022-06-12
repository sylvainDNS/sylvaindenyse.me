import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import VisuallyImpaired from './VisuallyImpaired'
import Dyslexic from './Dyslexic'
import Reset from './Reset'

const features = [VisuallyImpaired, Dyslexic, Reset]

const Features = ({ 'aria-hidden': ariaHidden }) => (
  <Wrapper aria-hidden={ariaHidden}>
    <ul>
      {features.map((Feature, index) => (
        <li key={index}>
          <Feature tabIndex={-Number(ariaHidden)} />
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
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  button {
    grid-template-columns: 30px 1fr;
  }
`

Features.propTypes = {
  'aria-hidden': PropTypes.bool,
}

export default memo(Features)
