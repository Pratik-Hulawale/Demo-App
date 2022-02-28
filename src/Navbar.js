import React, { useState } from 'react'

function Navbar() {
  const [text, settext] = useState('hello world pratik');

  const upclick = () => {
    console.log("clicked " + text)
    let newText = text.toUpperCase();
    settext(newText)
  }

  const upon = (event) => {
    console.log("changesd")
    settext(event.target.value);
  }
  return (
    <>
      <div>
        <h1>hello world</h1>
        <textarea name="te" id="test" value={text} onChange={upon} cols="80" rows="5"></textarea>
      </div>

      <div classname="btn">
      <input type="submit" value="UPPERCASE" onChange={upon} onClick={upclick} />
      </div>
    </>
  );
}

export default Navbar
