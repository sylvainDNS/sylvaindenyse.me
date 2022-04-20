import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import Avatar from '../components/Avatar'
import SEO from '../components/SEO'
import VisuallyHidden from '../components/VisuallyHidden'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    margin: 20px 0 5px;
  }

  h2 {
    margin: 10px 0 5px;
  }

  .link-list {
    padding: 0;
    margin: 32px 0 10px;

    font-size: 32px;
    list-style: none;

    --color-link: var(--color-text);
    --color-link-hover: var(--color-text);

    .link-item {
      display: inline;
      margin: 0 10px;
      @media screen and (prefers-reduced-motion: reduce) {
        a {
          transition: none;

          &:hover,
          &:focus {
            transition: none;
          }

          &:after {
            width: 0;
          }
        }
      }

      a {
        transition: 1s ease color;

        &:hover,
        &:focus {
          transition: none;
        }

        &:after {
          width: 0;
        }
      }
    }
  }

  .github {
    --color-link-hover: #6f42c1;
  }
  .gitlab {
    --color-link-hover: #fa7035;
  }
  .twitter {
    --color-link-hover: #1da1f2;
  }
  .linkedin {
    --color-link-hover: #2977c9;
  }

  .instagram {
    position: relative;

    &:hover,
    &:focus {
      background: transparent;
    }

    &:before {
      position: absolute;
      top: 50%;
      left: 50%;
      width: calc(0.875em - 1px);
      height: calc(0.875em - 1px);
      content: '';
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      border-radius: 12px;
      opacity: 0;

      @media screen and (prefers-reduced-motion: reduce) {
        transition: 1s ease opacity;
        transform: translate(-50%, -50%);
      }
    }

    svg {
      position: relative;
    }

    &:hover:before,
    &:focus:before {
      opacity: 1;
      transition: none;
    }
  }
`

const links = [
  {
    to: 'https://github.com/sylvaindns/',
    icon: faGithub,
    title: 'GitHub',
  },
  {
    to: 'https://gitlab.com//sylvainDNS/',
    icon: faGitlab,
    title: 'GitLab',
  },
  {
    to: 'https://twitter.com/sylvaindenyse/',
    icon: faTwitter,
    title: 'Twitter',
  },
  {
    to: 'https://www.linkedin.com/in/sylvain-denyse/',
    icon: faLinkedin,
    title: 'LinkedIn',
  },
  {
    to: 'https://www.instagram.com/sylvain.dns/',
    icon: faInstagram,
    title: 'Instagram',
  },
]

const Item = ({ to, icon, title }, index) => (
  <li
    key={`index-page-links-list-${index}`}
    className={`link-item ${title.toLowerCase()}`}
  >
    <a href={to} title={title} target="_blank" rel="noreferrer">
      <VisuallyHidden>{title}</VisuallyHidden>
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
)
Item.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
}

const Home = () => (
  <Wrapper>
    <SEO />
    <Avatar />
    <h1>Sylvain DENYSE</h1>
    <h2>Développeur Web</h2>
    <h3>Front-End — Accessibilité — JavaScript</h3>
    <ul className="link-list">{links.map(Item)}</ul>
  </Wrapper>
)

export default Home
