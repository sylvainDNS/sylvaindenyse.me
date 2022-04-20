import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link as DefaultLink } from 'gatsby'

const navLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Curriculum Vitae', to: '/resume' },
]

const Navigation = () => {
  const hasScrolled = useHasScrolled()
  const style = {
    '--box-shadow': hasScrolled ? 'var(--color-shadow)' : 'transparent',
  }

  return (
    <Wrapper style={style}>
      <Container>
        <Nav>
          <HomeLink to="/">Sylvain DENYSE</HomeLink>
          <LinkList>
            {navLinks.map(link => (
              <li key={link.to}>
                <Link activeClassName="active" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </LinkList>
        </Nav>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-content: center;
  width: 100%;
  min-height: 60px;
  padding-left: calc((100vw - 100%) / 2);

  background-color: var(--color-background);
  box-shadow: 0 3px 5px var(--box-shadow);

  @media (prefers-reduced-motion: no-preference) {
    transition: ease 100ms box-shadow;
  }
`

const Container = styled.section`
  width: 100%;
  max-width: 900px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin: 0 auto;

  font-weight: var(--font-weight-medium);
`

const Link = styled(DefaultLink)`
  &:not(:hover),
  &:not(:focus) {
    color: var(--color-text);

    &.active:after {
      left: 30%;
      width: 40%;
      background-color: var(--color-link);
    }
  }

  &:after {
    height: 2px;
  }
`

const HomeLink = styled(Link)`
  text-transform: uppercase;
  letter-spacing: 1px;
`

const LinkList = styled.ul`
  display: flex;
  gap: 40px;

  padding: 0;
  margin: 0;

  list-style: none;
`

const useHasScrolled = () => {
  const [hasScrolled, setHasScrolled] = useState(false)

  const onScroll = () => setHasScrolled(window.scrollY > 0)

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return hasScrolled
}

export default Navigation
