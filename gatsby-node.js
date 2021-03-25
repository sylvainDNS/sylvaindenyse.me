exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve('./src/templates/blog.js')

  const result = await graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        nodes {
          frontmatter {
            path
            published
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  result.data.allMdx.nodes.forEach(
    ({ frontmatter: { path, published = false } }) => {
      if (published)
        createPage({
          path,
          component: blogPostTemplate,
          context: {
            slug: path,
          },
        })
    }
  )
}
