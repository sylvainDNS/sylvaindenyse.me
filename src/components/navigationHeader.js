import React from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'
import { Link } from 'gatsby'

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;

  align-items: center;
  justify-content: center;
  min-height: 60px;

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

const NavigationHeader = () => {
  const theme = useTheme()

  return (
    <Header theme={theme}>
      <Container>
        <Navigation>
          <Link
            css={css`
              text-transform: uppercase;
            `}
            to="/"
          >
            Sylvain DENYSE - Web Developer Designer
          </Link>
          <Link to="/resume">About me</Link>
        </Navigation>
      </Container>
    </Header>
  )
}

export default NavigationHeader
