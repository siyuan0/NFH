import * as React from "react"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Plot from 'react-plotly.js';



const IndexPage = () => {
    const [BuyAmount, setBuyAmount] = useState("");
    const [tokenId, setTokenId] = useState("");
    const [profile, setProfile] = useState(null);
    const [pricelist, setPriceList] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(0);

    // useEffect(() => {

    //   var countie = Math.round(counter/1000);

    //   if (countie !== Math.round(counter+1/1000)) {
    //     generatePriceHistory(pricelist);
    //   }      

    //   setInterval(setCounter(counter+1), 1000);  
      

    // });

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
      setPriceList([0,0,0,0,0,0,0,0,0,JSON.parse(localStorage.getItem(tokenId)).price]);
    };

    function convertToImage (img) {
      var image = new Image();
      image.src = img;
      return img;
    }

    function generatePriceHistory (pricelist){
      pricelist.shift();
      pricelist.push(pricelist[pricelist.length - 1] + 50);
      return pricelist;
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
      <div>
      <b>Profile: {profile.tokenId}</b>
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
            value={tokenId}
            onChange={e => handleTokenIdchange(e)}
          />
        </div>
        <div><p>Quantity:</p></div>
        <div>
          <input
            name="1"
            placeholder="1"
            value={tokenId}
            onChange={e => handleTokenIdchange(e)}
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
            value={tokenId}
            onChange={e => handleTokenIdchange(e)}
          />
        </div>
        <div><p>Quantity:</p></div>
        <div>
          <input
            name="1"
            placeholder="1"
            value={tokenId}
            onChange={e => handleTokenIdchange(e)}
          />
          <button onClick={() => handleSearch()}>Place Sell Order</button>
        </div>
      </div>
      <div id="div_under">
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: pricelist,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
          ]}
          layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
        />
      </div>
      </div>
    }
    </Layout>
  )
}

export default IndexPage
