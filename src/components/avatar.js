import React from 'react'
import PropTypes from 'prop-types'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

const Avatar = ({ css: cssProps }) => (
  <StaticImage
    css={css`
      border-radius: 50%;
      ${cssProps};
    `}
    width={200}
    src="../images/avatar.jpg"
    alt="A picture of me"
    formats={['auto', 'webp', 'avif']}
    quality={80}
  />
)

Avatar.propTypes = {
  css: PropTypes.object,
}

export default Avatar
