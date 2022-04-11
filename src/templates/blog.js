import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from '@emotion/styled'
import SEO from '../components/SEO'

const getTimeToRead = (words, wordsPerMinute = 180) =>
  Math.round(words / wordsPerMinute) || 1

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
        Published on {frontmatter.date} · {timeToRead} minutes to read
      </Meta>
      <Article>
        <MDXRenderer>{body}</MDXRenderer>
      </Article>
    </section>
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

const Title = styled.h1`
  margin: 0;
`

const Meta = styled.p`
  font-style: italic;
  font-weight: var(--font-weight-light);
`

const Article = styled.article`
  p:first-of-type {
    margin-top: 2rem;
  }
`

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
