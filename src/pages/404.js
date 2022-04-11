import React from 'react'
import styled from '@emotion/styled'

const NotFound = () => (
  <Wrapper>
    <h1>404</h1>
    <p>Oops, seems like the page doesn&apos;t exist or the link is broken.</p>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex-grow: 1;

  text-align: center;
`

export default NotFound
