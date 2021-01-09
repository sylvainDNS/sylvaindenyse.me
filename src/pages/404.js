import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  flex-grow: 1;

  text-align: center;
`

const NotFound = () => (
  <Wrapper>
    <h1>404</h1>
    Oops, seems like the page doesn&apos;t exist or the link is broken.
  </Wrapper>
)

export default NotFound
