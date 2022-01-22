import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UploadPage = () => {
  const [name, setName] = useState("");
  

  const handleNamechange = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  const handleCalculate = () => {
    alert("You will need to sell 10% of your future income");
  };

  const handleCreate = () => {
    alert("NFH created");
  };



  return (
    <Layout>
        <Seo title="Upload" />
        <h2>Create your own Non-fungible Human (NFH)</h2>

        <b>Upload your selfie</b>
        <p>Selfie placeholder</p>

        <b>Your Name</b>
        <div>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => handleNamechange(e)}
            />
        </div>

        <b>Describe your plan for the next 10 years</b>
        <p>Plan description placeholder</p>

        <b>Describe your desired career</b>
        <p>Career placeholder</p>

        <b>How much money do you need?</b>
        <p>Money required placeholder</p>

        <h3>Calculate % of income required to give away!</h3>
        <button onClick={() => handleCalculate()}>Calculate</button>

        <button onClick={() => handleCreate()}>Confirm NFH creation</button>


    </Layout>
  )
}

export default UploadPage
