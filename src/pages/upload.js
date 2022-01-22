import * as React from "react"
import { useState, Image } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const UploadPage = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [tokenId, setTokenId] = useState("");
  const [career, setCareer] = useState("");
  const [money, setMoney] = useState("");

  var toPay = 0;

  const handleNamechange = (e) => {
    const { name, value } = e.target;
    setName(value);
  };

  const handleImagechange = (e) => {
    setImage(e.target);
  };

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  const handleTokenIdchange = (e) => {
    const {tokenId, value } = e.target;
    setTokenId(value);
  };

  const handleCareerchange = (e) => {
    const { career, value } = e.target;
    setCareer(value);
  };

  const handleMoneychange = (e) => {
    const { money, value } = e.target;
    setMoney(value);
  };

  const handleCalculate = () => {

    const salaries = {
        "Software Engineer": 60000,
        "Investment Banker": 80000,
    };

    toPay = Math.round(money/(salaries[career]/10)*10)/10;

    alert(`You will need to sell ${toPay}% of your future income`);
  };

  const handleCreate = () => {
    var toSave = {
        name: name,
        image: getBase64Image(image),
        tokenId: tokenId,
        tokens: toPay*10,
        price: Math.round(money/(toPay*10)),
    };

    localStorage.setItem(name, JSON.stringify(toSave));
    alert("NFH created");
  };



  return (
    <Layout>
        <Seo title="Upload" />
        <h2>Create your own Non-Fungible Human (NFH)</h2>

        <b>Upload your selfie</b>
        <br />
        <input 
            type="file"
            accept="image/*"
            onChange={e => handleImagechange(e)}    
        />

        <br />

        <Image source={image} />

        <b>Your Name</b>
        <div>
            <input
              name="name"
              placeholder="Name"
              value={name}
              onChange={e => handleNamechange(e)}
            />
        </div>

        <b>Choose a token ID</b>
        <div>
            <input
              name="tokenId"
              placeholder="Token ID"
              value={tokenId}
              onChange={e => handleTokenIdchange(e)}
            />
        </div>

        <b>Describe your desired career</b>
        <div>
            <input
              name="career"
              placeholder="Career"
              value={career}
              onChange={e => handleCareerchange(e)}
            />
        </div>

        <b>How much money do you need?</b>
        <div>
            <input
              name="money"
              placeholder="Money required"
              value={money}
              onChange={e => handleMoneychange(e)}
            />
        </div>

        <b>Calculate % of income required to give away!</b>
        <button onClick={() => handleCalculate()}>Calculate</button>
        
        <div>
          <button onClick={() => handleCreate()}>Confirm NFH creation</button>
        </div>


    </Layout>
  )
}

export default UploadPage
