import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Profile: SML</h1>
    <div>
      <div id="div_side">
      <p>Name: Simon Liu<br />
        Age: 35<br />
        Gender: Male<br />
        Criminal Records: Nil<br />
      </p>
      </div>
      <div id="div_side">
      <StaticImage 
        src="../images/profile_simon.png"
        layout="fixed"
        width={150}
        height={150}/>
      </div>
    </div>
    <div id="div_under">
      <h2>Current Price: £303/token</h2>
    </div>
    <div id="div_under">
      <StaticImage 
        src="../images/price_chart.png"
        layout="constrained"
        />
    </div>
  </Layout>
)

export default IndexPage
