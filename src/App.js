import './App.css';
import React, { useState } from 'react'
import ImageComp from './Components/ImageComp';
import im1 from "./images/1.jpg"
import im2 from "./images/2.jpg"
import im3 from "./images/3.jpg"
import im4 from "./images/4.jpg"

function App() {
  const [expanded, setExpanded] = useState(0);
  const headers = ["New Zealand", "Lake Wakatipu","Lake Web Kai","Doubtful Sound Fjord","Auckland Beach"]
  const reset = ()=>{
    setExpanded(0)
  }
  return (
    <div className="App">
    <div className="top">
    <h1>{headers[expanded]}</h1>
    {(expanded!==0)&&(<p className="close" onClick={reset}>x</p>)}
    </div>
    {(expanded === 0) && (<h3>The project might be trickier than it seems. Look around carefully. What do you see? <br></br> The sky is blue, the grass is green. The sun shines through the window.</h3>)}
    {(expanded === 0)&&(<div>
    <div className = "row">
    <ImageComp src={im1} id="circ" func={setExpanded}></ImageComp>
    <ImageComp src={im2} id="rect" func={setExpanded}></ImageComp>
    </div>
    <div className = "row">
    <ImageComp src={im3} id="squa" func={setExpanded}></ImageComp>
    <ImageComp src={im4} id="tria" func={setExpanded}></ImageComp>
    </div>
    </div>)}
    {(expanded!==0)&&(<div>
      <div className="Big">
        <ImageComp src={expanded===1? im1:expanded===2?im2:expanded===3?im3:im4}
        id="bigimg"
        ></ImageComp>
      </div>
    </div>)
    }
    </div>
  );
}

export default App;
