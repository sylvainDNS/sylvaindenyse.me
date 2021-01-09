import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 60px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.background};

  transition: ease 100ms box-shadow;
  box-shadow: 0 3px 5px
    ${({ shadow, theme }) => (shadow ? theme.colors.shadow : 'transparent')};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 20px;

  font-family: 'Lato';
  font-weight: 700;

  a:not(:hover) {
    color: ${({ theme }) => theme.colors.text};
  }
`

const Container = styled.section`
  width: 100%;
  max-width: 900px;
`

const NoWrap = styled.span`
  white-space: nowrap;
`

const NavigationHeader = props => {
  const hasScrolled = useHasScrolled()

  return (
    <Header {...props} shadow={hasScrolled}>
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

const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const onScroll = () => setHasScrolled(window.scrollY > 0)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hasScrolled
}

export default NavigationHeader
