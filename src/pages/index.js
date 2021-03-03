import React from 'react'
import styled from '@emotion/styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGitlab,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import Avatar from '../components/avatar'
import SEO from '../components/seo'
import PropTypes from 'prop-types'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  text-align: center;

  h1 {
    margin: 20px 0 5px;
  }

  h2 {
    margin: 10px 0 5px;
  }

  .link-list {
    list-style: none;
    margin: 32px 0 10px;
    padding: 0;

    font-size: 32px;

    --color-link: var(--color-text);
    --color-link-hover: var(--color-text);

    .link-item {
      display: inline;
      margin: 0 10px;

      a {
        transition: 1s ease color;

        &:hover,
        &:focus {
          transition: none;
        }

        &::after {
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
]

const Item = ({ to, icon, title }, index) => (
  <li
    key={`index-page-links-list-${index}`}
    className={`link-item ${title.toLowerCase()}`}
  >
    <a href={to} title={title} target="_blank" rel="noreferrer">
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
    <SEO title="Welcome!" />
    <Avatar />
    <h1>Sylvain DENYSE</h1>
    <h2>Full Stack Web Developer</h2>
    <ul className="link-list">{links.map(Item)}</ul>
  </Wrapper>
)

export default Home
