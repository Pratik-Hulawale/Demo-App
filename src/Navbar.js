import { clear } from '@testing-library/user-event/dist/clear';
import React, { useState } from 'react'
import './App.css';
import pic from './icont.png';

function Navbar() {
  const [text, settext] = useState('');

  const upclick = () => {
    let newText = text.toUpperCase();
    settext(newText)
  }

// WORD COUNTER

  // lowercase
  const downclick = () => {
    let newText = text.toLowerCase();
    settext(newText)
  }


  // FInd Words
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea5");
    text.select();
    navigator.clipboard.writeText(text.value);
  }


  // remove Extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    settext(newText.join(" "))
  }


  const upon = (event) => {
    settext(event.target.value);
  }

  const zer = () => {
    settext('')
  }

  const clear = () => {
    settext('')
  }


  return (
    <>
      <div className="wrap">

        <div className='log'>
          <img cid='logo' src={pic} alt="" />
          <h1>TextUtils</h1>
        </div>

        <div className="wrapper">
          <div className="text-wrap">
            <div class="form-group green-border-focus">
              <label for="exampleFormControlTextarea5"></label>
              <textarea class="form-control" id="exampleFormControlTextarea5" value={text} placeholder="Start Writing Here....." onChange={upon} cols="70" rows="10"></textarea>
            </div>
          </div>




          <div className="btn">
            <button id='btu' className='butt' onChange={upon} onClick={upclick}>UPPERCASE</button>
            <button id='btl' className='butt' onChange={upon} onClick={downclick}>lowercase</button>
            <button id='btc' className='butt' onChange={upon} onClick={handleCopy}>COPY</button>
            <button id='btr' className='butt' onChange={upon} onClick={handleExtraSpaces}>REMOVE SPACE</button>
            <button id='btcc' className='butt' onChange={upon} onClick={clear}>CLEAR</button>
          </div>

          <div className="preview">
            {/* <h2>Preview</h2> */}
            {/* {text} */}
            <p> Character Count: {text.length} | Word Count: {text.split(" ").length - 1} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
