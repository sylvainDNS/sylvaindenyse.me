import React from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'
import { Link } from 'gatsby'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 60px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 20px;

  font-family: 'Lato';
  font-weight: 700;
`

const Container = styled.section`
  width: 100%;
  max-width: 900px;
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const NavigationHeader = props => {
  const theme = useTheme()

  return (
    <Header theme={theme} {...props}>
      <Container>
        <Navigation>
          <Link
            css={css`
              text-transform: uppercase;
              margin-right: 32px;
              letter-spacing: 1px;
            `}
            to="/"
          >
            <NoWrap>Sylvain DENYSE</NoWrap>
            {' - '}
            <NoWrap>Web Developer Designer</NoWrap>
          </Link>
          <Link to="/resume">
            <NoWrap>About me</NoWrap>
          </Link>
        </Navigation>
      </Container>
    </Header>
  )
}

export default NavigationHeader
