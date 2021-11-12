import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import SEO from '../components/seo'

const getTimeToRead = (words, wordsPerMinute = 180) =>
  Math.round(words / wordsPerMinute) || 1

const Article = styled.article`
  .title {
    margin-bottom: 0;
  }

  .publication-hint {
    font-style: italic;
    font-weight: var(--font-weight-light);
  }

  p:first-of-type {
    margin-top: 2rem;
  }
`

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
    <Article>
      <SEO title={frontmatter.title} article={true} description={excerpt} />
      <h1 className="title">{frontmatter.title}</h1>
      <div className="publication-hint">
        Published on {frontmatter.date} · {timeToRead} minutes to read
      </div>
      <MDXRenderer>{body}</MDXRenderer>
    </Article>
  )
}
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

export const pageQuery = graphql`
  query ($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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

export default Template
