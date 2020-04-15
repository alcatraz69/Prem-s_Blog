import React from "react"
import { graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
        <h2>Prem Kantikar</h2>
        <p>
          I'm a Web designer / developer based in Bangalore. I Love to create
          visually applealig things with a creative touch. Currently working at
          Infosys as a System Engineer. I completed my B.Tech from NMIT
          Banglore.
        </p>
        Checkout my work at{" "}
        <a href="https://github.com/alcatraz69" target="blank">
          Github
        </a>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
