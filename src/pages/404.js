import React from 'react'
import styled from '@emotion/styled'

const NotFound = () => (
  <Wrapper>
    <h1>404</h1>
    <p>
      Oups, il semble que la page n&apos;existe pas ou que le lien est cassé.
    </p>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export default NotFound
