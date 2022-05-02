import React from 'react'
import styled from '@emotion/styled'
import SEO from '../components/SEO'

const Content = styled.h1`
  margin: auto;
  font-style: italic;
  font-weight: var(--font-weight-light);
`

const Blog = () => (
  <Content>
    <SEO title="Articles de blog" />
    Bientôt disponible...
  </Content>
)

export default Blog
