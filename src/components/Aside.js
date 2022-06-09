import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

const Aside = ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <span>
      <FontAwesomeIcon icon={faCircleInfo} />
    </span>
    <Content>{children}</Content>
  </Wrapper>
)

const Wrapper = styled.aside`
  display: grid;
  grid-template-columns: 32px 1fr;
  align-items: baseline;
  margin-left: 32px;
  font-style: italic;
`

const Content = styled.p`
  margin: 0;
`

Aside.propTypes = {
  children: PropTypes.node,
}
export default Aside
