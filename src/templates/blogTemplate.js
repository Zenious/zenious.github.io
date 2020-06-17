import React from "react"
import { graphql } from "gatsby"
import Logo from "../images/logo-inverted.png"
import SEO from "../components/seo"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
        <SEO title={frontmatter.title} />
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
            paddingBottom: '0.5rem'
          }}
        >
           <a
            href="/"><img src={Logo} style={{ marginBottom: 0 }}></img></a>
          <br />
          {/* BLOG */}
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
        <hr></hr>
          <div className="blog-post-container">
            <div className="blog-post">
              <h2 style={{'marginBottom': 0}}>{frontmatter.title}</h2>
              <h4>{frontmatter.date}</h4>
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </div>
      </body>
      <footer
        style={{
          backgroundColor: "#50514F",
          margin: "0 auto",
          color: "white",
          bottom: 0,
        }}
      >
        <div
          style={{
            width: "60%",
            margin: "0 auto",
            textAlign: "right",
          }}
        >
          {" "}
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            href="https://www.gatsbyjs.org"
            style={{
              color: "#ececec",
            }}
          >
            Gatsby
          </a>
        </div>
      </footer>
    </>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
