import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Layout from '../components/layout'
import GatsbyImage from 'gatsby-image'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: Lato;
  font-weight: 700;
`

const Title = styled.h1`
  font-size: 32px;
  margin: 20px 0 5px;
`
const SubTitle = styled.h2`
  font-size: 24px;
  margin: 10px 0 5px;
`

const Avatar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "avatar.jpg" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <GatsbyImage
      css={css`
        border-radius: 50%;
      `}
      fixed={data.file.childImageSharp.fixed}
      alt="A picture of me"
    />
  )
}

const Home = () => (
  <Layout>
    <Content>
      <Avatar />
      <Title>Sylvain DENYSE</Title>
      <SubTitle>Full Stack, DevOps, and Magician</SubTitle>
    </Content>
  </Layout>
)

export default Home
