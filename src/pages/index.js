import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
    <Seo title="Home" />
    <h1>Profile: SML</h1>
    <p>Name: Simon Liu</p>
    <p>Age: 35</p>
    <p>Gender: Male</p>
    <p>Criminal Records: Nil<StaticImage
      src="../images/profile_simon.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /></p>
    
    
    
  </Layout>
)

export default IndexPage
