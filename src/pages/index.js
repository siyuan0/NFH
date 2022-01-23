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
    const [BuyPrice, setBuyPrice] = useState("");
    const [SellPrice, setSellPrice] = useState("");
    const [BuyQuantity, setBuyQuantity] = useState("");
    const [SellQuantity, setSellQuantity] = useState("");
    const [profile, setProfile] = useState(null);
    const [pricelist, setPriceList] = useState([0,0,0,0,0,0,0,0,0,0]);
    const [counter, setCounter] = useState(0);
    const [flag, setFlag] = useState(0);

    useEffect(() => {

      var currentdate = new Date();

      if (counter != currentdate.getSeconds()) {
        generatePriceHistory(pricelist);
        setCounter(currentdate.getSeconds());
      }  
      setTimeout(() => {
        setFlag(flag+1);
      }, 1000);
    });

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
      setPriceList([0,0,0,0,0,0,0,0,0,JSON.parse(localStorage.getItem(tokenId)).price]);
    };

    function convertToImage (img) {
      var image = new Image();
      image.src = img;
      return img;
    }

    function generatePriceHistory (pricelist){
      pricelist.shift();
      if (Math.random() < 0.5){
        pricelist.push(pricelist[pricelist.length - 1] + 50 * Math.random());
      } else { 
        pricelist.push(pricelist[pricelist.length - 1] - 50 * Math.random());
      }
      return pricelist;
    }

    

  return(
    <Layout>
      <Seo title="Home" />
      <h2>Search for your Non-Fungible Human (NFH)</h2>
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
          style={{ 'height' : '150px' }}
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
          layout={ {width: 800, height: 400, title: 'Price history'} }
        />
      </div>
      </div>
    }
    </Layout>
  )
}

export default IndexPage
