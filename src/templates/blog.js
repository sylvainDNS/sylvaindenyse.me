import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import styled from '@emotion/styled'
import SEO from '../components/SEO'
import CodeBlock from '../components/CodeBlock'

const getTimeToRead = (words, wordsPerMinute = 180) =>
  Math.round(words / wordsPerMinute) || 1

const components = {
  pre: CodeBlock,
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
          <MDXRenderer>{body}</MDXRenderer>
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
  p {
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
`

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "DD MMMM YYYY", locale: "fr")
        path
        title
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
