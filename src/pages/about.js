import React from "react"
import { graphql } from "gatsby"
import pic3 from "../../content/assets/pic3.jpeg"
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
          I'm a Web designer / developer based in Bangalore. I Love to create
          visually appealing things with a creative touch. Currently working at
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
