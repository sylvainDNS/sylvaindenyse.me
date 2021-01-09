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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  text-align: center;
`

const Title = styled.h1`
  margin: 20px 0 5px;
`
const SubTitle = styled.h2`
  margin: 10px 0 5px;
`

const LinkList = styled.ul`
  list-style: none;
  margin: 32px 0 10px;
  padding: 0;

  font-size: 32px;
`

const LinkListItem = styled.li`
  display: inline;
  margin: 0 10px;

  a {
    transition: 1s ease color;
    color: ${({ theme }) => theme.colors.text};

    &:hover,
    &:focus {
      color: ${({ hoverColor }) => hoverColor};
      transition: none;
    }
  }
`

const links = [
  {
    to: 'https://github.com/sylvaindns/',
    icon: faGithub,
    color: '#6f42c1',
    title: 'GitHub',
  },
  {
    to: 'https://gitlab.com//sylvainDNS/',
    icon: faGitlab,
    color: '#fa7035',
    title: 'GitLab',
  },
  {
    to: 'https://twitter.com/sylvaindenyse/',
    icon: faTwitter,
    color: '#1da1f2',
    title: 'Twitter',
  },
  {
    to: 'https://www.linkedin.com/in/sylvain-denyse/',
    icon: faLinkedin,
    color: '#2977c9',
    title: 'LinkedIn',
  },
]

const Home = () => (
  <Wrapper>
    <SEO title="Welcome!" />
    <Avatar />
    <Title>Sylvain DENYSE</Title>
    <SubTitle>Full Stack, DevOps, and Magician</SubTitle>
    <LinkList>
      {links.map(({ to, icon, color, title }, index) => (
        <LinkListItem key={`index-page-links-list-${index}`} hoverColor={color}>
          <a href={to} title={title} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={icon} />
          </a>
        </LinkListItem>
      ))}
    </LinkList>
  </Wrapper>
)

export default Home
