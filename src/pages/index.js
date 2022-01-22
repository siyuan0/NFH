import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => {
    const [BuyAmount, setBuyAmount] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [profile, setProfile] = useState({image:"None"});

    const handleBuyAmountchange = (e) => {
      const { BuyAmount, value } = e.target;
      setBuyAmount(value);
    };

    const handleTokenIdchange = (e) => {
      const { tokenId, value } = e.target;
      setTokenId(value);
    };

    const handleSearch = () => {
      setProfile(JSON.parse(localStorage.getItem(tokenId)));
    };

    function convertToImage (img) {
      var image = new Image();
      image.src = img;
      return img;
    }

  return(
    <Layout>
      <Seo title="Home" />
      <h1>Profile: SML</h1>

      <div>
        <input
          name="tokenId"
          placeholder="Token ID"
          value={tokenId}
          onChange={e => handleTokenIdchange(e)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      {profile.image === "None" ? "Search now" : <img src={convertToImage(profile.image)} />}


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
        <div><h2>Current Price: £303/token</h2></div>
        <div>
              <input
                name="BuyAmount"
                placeholder="Buy Amount"
                value={BuyAmount}
                onChange={e => handleBuyAmountchange(e)}
              />
          </div>
      </div>
      <div id="div_under">
        <StaticImage 
          src="../images/price_chart.png"
          layout="constrained"
          />
      </div>
    </Layout>
  )
}

export default IndexPage
