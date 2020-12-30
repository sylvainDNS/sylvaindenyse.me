import React from 'react'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'
import GatsbyImage from 'gatsby-image'
import { css } from '@emotion/react'

const Avatar = ({ css: cssProps }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <GatsbyImage
      css={css`
        border-radius: 50%;
        width: 100%;
        max-width: min(30%, 200px);
        ${cssProps};
      `}
      fluid={data.file.childImageSharp.fluid}
      alt="A picture of me"
    />
  )
}

Avatar.propTypes = {
  css: PropTypes.object,
}

export default Avatar
