import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"



const IndexPage = () => {
    const [BuyAmount, setBuyAmount] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [BuyPrice, setBuyPrice] = useState("");
    const [SellPrice, setSellPrice] = useState("");
    const [BuyQuantity, setBuyQuantity] = useState("");
    const [SellQuantity, setSellQuantity] = useState("");
    const [profile, setProfile] = useState(null);

    const handleBuyAmountchange = (e) => {
      const { BuyAmount, value } = e.target;
      setBuyAmount(value);
    };
    const handleBuyPricechange = (e) => {
      const { BuyPrice, value } = e.target;
      setBuyPrice(value);
    };
    const handleSellPricechange = (e) => {
      const { SellPrice, value } = e.target;
      setSellPrice(value);
    };
    const handleBuyQuantitychange = (e) => {
      const { BuyQuantity, value } = e.target;
      setBuyQuantity(value);
    };
    const handleSellQuantitychange = (e) => {
      const { SellQuantity, value } = e.target;
      setSellQuantity(value);
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
      <div>
        <input
          name="tokenId"
          placeholder="Token ID"
          value={tokenId}
          onChange={e => handleTokenIdchange(e)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>

      {profile === null ? "" :
      <div><br />
      <h2>Profile: {profile.tokenId}</h2>
      <div>
        <div id="div_side">
        <p>Name: {profile.name}<br />
          Tokens Available: {profile.tokens}<br />
        </p>
        </div>
        <div id="div_side">
        <img
          src={convertToImage(profile.image)}
        />
        </div>
      </div>
      <div id="div_under">
        <div><h2>Current Price: £{profile.price}/token</h2></div>
      </div>
      <div id="div_under">
        <div><p>Buy Price:</p></div>
        <div>
          <input
            name="Buy Price"
            placeholder="Buy Price"
            value={BuyPrice}
            onChange={e => handleBuyPricechange(e)}
          />
        </div>&nbsp;&nbsp;
        <div><p>Quantity:</p></div>
        <div>
          <input
            name="Quantity"
            placeholder="Quantity"
            value={BuyQuantity}
            onChange={e => handleBuyQuantitychange(e)}
          />
          <button onClick={() => handleSearch()}>Place Buy Order</button>
        </div>
      </div>
      <div id="div_under">
        <div><p>Sell Price:</p></div>
        <div>
          <input
            name="Sell Price"
            placeholder="Sell Price"
            value={SellPrice}
            onChange={e => handleSellPricechange(e)}
          />
        </div>&nbsp;&nbsp;
        <div><p>Quantity:</p></div>
        <div>
          <input
            name="Quantity"
            placeholder="Quantity"
            value={SellQuantity}
            onChange={e => handleSellQuantitychange(e)}
          />
          <button onClick={() => handleSearch()}>Place Sell Order</button>
        </div>
      </div>
      <div id="div_under">
        <StaticImage 
          src="../images/price_chart.png"
          layout="constrained"
          />
      </div>
      </div>
    }
    </Layout>
  )
}

export default IndexPage
