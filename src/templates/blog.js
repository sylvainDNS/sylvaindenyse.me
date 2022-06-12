import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import CodeBlock from '../components/CodeBlock'
import Aside from '../components/Aside'
import ExternalLink from '../components/ExternalLink'

const getTimeToRead = (words, wordsPerMinute = 110) =>
  Math.round(words / wordsPerMinute) || 1

const components = {
  pre: CodeBlock,
  aside: Aside,
  a: ExternalLink,
}

const Template = ({ data }) => {
  const { mdx } = data
  const {
    frontmatter,
    body,
    wordCount: { words },
    excerpt,
  } = mdx
  const timeToRead = getTimeToRead(words)

  return (
    <section>
      <SEO title={frontmatter.title} article={true} description={excerpt} />
      <Title>{frontmatter.title}</Title>
      <Meta>
        Publié le {frontmatter.date} · {timeToRead} minutes de lecture
      </Meta>
      <Article>
        <MDXProvider components={components}>
          <MDXRenderer localImages={frontmatter.embeddedImagesLocal}>
            {body}
          </MDXRenderer>
        </MDXProvider>
      </Article>
    </section>
  )
}

const Title = styled.h1`
  margin: 0;
`

const Meta = styled.p`
  font-style: italic;
  font-weight: var(--font-weight-light);
`

const Article = styled.article`
  & > p {
    margin-top: 1rem;

    &:first-of-type {
      margin-top: 2rem;
    }
  }

  img,
  video {
    display: flex;
    max-width: 100%;
    margin: auto;
  }

  table {
    position: relative;
    max-width: 100%;
    margin: auto;
    border-collapse: collapse;

    th,
    td {
      padding: 5px 8px;
      text-align: center;
      border: 1px solid var(--color-text);
    }

    caption {
      font-size: ${16 / 19}rem;
      font-style: italic;
      opacity: 0.8;
    }
  }

  blockquote {
    position: relative;
    font-style: italic;
    font-weight: var(--font-weight-light);

    &:before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: -16px;
      width: 4px;
      content: '';
      background-color: var(--color-background-light);
    }
  }

  .gatsby-image-wrapper.gatsby-image-wrapper-constrained {
    display: block;
    width: 100%;
    margin-right: auto;
    margin-left: auto;

    img {
      width: auto;
    }
  }
`

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "fr")
        path
        title
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      wordCount {
        words
      }
      excerpt
    }
  }
`

Template.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        date: PropTypes.string,
        embeddedImagesLocal: PropTypes.array,
      }),
      body: PropTypes.string,
      wordCount: PropTypes.shape({
        words: PropTypes.number,
      }),
      excerpt: PropTypes.string,
    }),
  }),
}
export default Template
