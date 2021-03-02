import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 1000;

  min-height: 60px;
  width: 100%;
  padding-left: calc((100vw - 100%) / 2);
  align-self: flex-end;

  background-color: var(--color-background);

  transition: ease 100ms box-shadow;
  box-shadow: 0 3px 5px transparent;

  &.scrolled {
    box-shadow: 0 3px 5px var(--color-shadow);
  }

  .container {
    width: 100%;
    max-width: 900px;
  }

  .navigation {
    display: flex;
    justify-content: space-between;

    margin: 0 auto;
    padding: 0 20px;

    font-weight: var(--font-weight-medium);

    .nav-link {
      &:not(:hover) {
        color: var(--color-text);

        &.active::after {
          left: 30%;
          width: 40%;
          background-color: var(--color-link);
        }
      }

      &::after {
        height: 2px;
      }
    }

    .title {
      text-transform: uppercase;
      margin-right: 32px;
      letter-spacing: 1px;
    }
  }
`

const NavigationHeader = props => {
  const hasScrolled = useHasScrolled()

  return (
    <Header {...props} className={hasScrolled && 'scrolled'}>
      <section className="container">
        <nav className="navigation">
          <Link className="nav-link title" to="/">
            Sylvain DENYSE
          </Link>
          <Link className="nav-link" activeClassName="active" to="/resume">
            About me
          </Link>
        </nav>
      </section>
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
