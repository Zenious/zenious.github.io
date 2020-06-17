import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import Logo from "../images/logo-inverted.png"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <>
      <SEO title="Blog" />
      <body
        style={{
          backgroundColor: "#50514F",
          padding: "0.25rem",
          margin: 0,
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            padding: "0 5%",
            color: "#ececec",
          }}
        >
          <h1
            style={{
              padding: "1rem",
              textAlign: "center",
              marginBottom: 0,
              paddingBottom: "0.5rem",
            }}
          >
            <a href="/">
              <img src={Logo} style={{ marginBottom: 0 }}></img>
            </a>
            <br />
          </h1>
          <h3 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
            <a
              href="/"
              style={{
                color: "#ececec",
              }}
            >
              Hello World
            </a>{" "}
            |{" "}
            <a
              href="/blog"
              style={{
                color: "#ececec",
              }}
            >
              Blog
            </a>
          </h3>
          <hr />
          <div>
            <h2>Blog Posts</h2>
            {Posts}
          </div>
        </div>
      </body>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
