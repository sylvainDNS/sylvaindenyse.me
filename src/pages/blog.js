import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import PropTypes from 'prop-types'
import SEO from '../components/SEO'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const title = 'Articles de blog'

const Blog = ({ data }) => {
  const posts = data.allMdx.edges

  return (
    <section>
      <SEO title={title} />
      <Head>
        <h1>{title}</h1>
        <p>
          {posts.length} article{posts.length > 1 ? 's' : ''}
        </p>
      </Head>
      <Posts role="list">
        {posts.map(({ node }) => (
          <Post key={node.id} role="listitem">
            <Link to={node.frontmatter.path}>
              <Content>
                <h3>{node.frontmatter.title}</h3>
                <p>{node.excerpt}</p>
                <ReadMore>Lire plus...</ReadMore>
                <Arrows>
                  <FontAwesomeIcon icon={faAngleRight} size="xs" />
                  <FontAwesomeIcon icon={faAngleRight} size="xs" />
                  <FontAwesomeIcon icon={faAngleRight} size="xs" />
                </Arrows>
              </Content>
            </Link>
          </Post>
        ))}
      </Posts>
    </section>
  )
}

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  p {
    font-style: italic;
    font-weight: var(--font-weight-light);
  }
`

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`

const Arrows = styled.span`
  display: inline-flex;
  gap: 4px;
  margin-left: 16px;

  svg {
    opacity: 0;
  }
`

const appear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-16px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const Post = styled.article`
  flex: 1 1 400px;

  h3 {
    margin-top: 0;
  }

  h3,
  svg {
    @media (prefers-reduced-motion: no-preference) {
      transition: color 0.2s ease-out;
    }
  }

  a {
    display: block;
    color: var(--color-text);
    background-color: var(--color-background-light);
    border-radius: 8px;

    &:hover,
    &:focus {
      box-shadow: 0 3px 5px var(--color-shadow);

      &:after {
        content: none;
      }

      h3,
      svg {
        color: var(--color-link);
      }

      @media (prefers-reduced-motion: no-preference) {
        ${Arrows} svg {
          animation: ${appear} 0.2s ease-out;
          animation-fill-mode: forwards;

          &:nth-of-type(1) {
            animation-delay: 200ms;
          }
          &:nth-of-type(2) {
            animation-delay: 100ms;
          }
        }
      }
    }

    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s ease-out;
    }
  }
`

const Content = styled.div`
  padding: 10px 16px;
`

const ReadMore = styled.p`
  display: inline-block;
`

export const pageQuery = graphql`
  query {
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

Blog.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string,
              path: PropTypes.string,
            }),
            id: PropTypes.string,
          }),
        })
      ),
    }),
  }),
}
export default Blog
