import React from "react"
import { graphql } from "gatsby"
import pic3 from "../../content/assets/profile-pic (2).png"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <div style={{ marginTop: `30px`, fontFamily: `Montserrat` }}>
          <img
          style={{ width: `200px`, borderRadius: `50%` }}
          className="about-img"
          src={pic3}
          alt=""
        />
        <h2 style={{ marginTop: `0` }}>Prem Kantikar</h2>
        <p>
          I'm a Bangalore-based software engineer who specializes in building (and occasionally designing) exceptional digital experiences. 
          Currently, I'm working on Full Stack Projects at NeogCamp focused on building accessible, visually appealing Web apps.
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
