import React, { useState } from "react"
import "./index.css"

const Text = () => {
  const [inputText, setInputText] = useState('');
  const [theamColor, setThemeColor] = useState("");

  

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setInputText(inputText.toLowerCase());
  };
  const clearText = () => {
    setInputText('');
  };

  const handleDuplicate = () => {
    setInputText((prevValue) => prevValue + inputText);
  };
  const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const changeThemeColor = () => {
    setThemeColor(randomColor);
  };
  const copyHandle = () => {
    navigator.clipboard.writeText(inputText)
  }
  const pasteHandle = () => {
    const data = navigator.clipboard.readText().then((e) => {
      setInputText(inputText + e)
    })
    console.log(data);
  }


  
  



  return (
    <div style={{ backgroundColor: theamColor }} className="bd" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
      <div className="h1">Text Editor
        <div>
          <input className="input" type="text" value={inputText} onChange={handleInputChange} placeholder="guys type somthing...." />
        </div>
        <div className="main">
          <button className="theme" onClick={changeThemeColor} >Color</button>
          <button className="LC" onClick={convertToLowerCase} >Lower Case</button>
          <button className="UC" onClick={convertToUpperCase} > Upper Case</button>
          <button className="Remove" onClick={clearText}>Remove</button>
          <button className="Copy"  onClick={copyHandle}>Copy </button>
          <button className="Paste"   onClick={pasteHandle}>Paste</button>
          <button className="Duplicate" onClick={handleDuplicate}>Duplicate</button>

        </div>
      </div>
    </div>
  )
}
export default Text