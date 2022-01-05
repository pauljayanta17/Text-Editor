import "./App.css";
// import Navbar from './components/Navbar';
import Textareas from "./components/Textareas";
import DarkMode from "./components/DarkMode";
import React, { useState } from "react";
function App() {
  //change theme in body
  const handleThemeChange = () => {
    console.log("working");
    // If theme false then light else dark
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
    if(theme==="Light"){
      document.getElementById("bodyID").style.background = "white"
      setTextColor("black")
      setContainerColor("white")
      console.log(textColor+"\n"+containerColor)
    }
    else{
      document.getElementById("bodyID").style.background = "#242521"
      setTextColor("white")
      setContainerColor("#4D4D4B")
      console.log(textColor+"\n"+containerColor)
    }
  };

  const [theme, setTheme] = useState("Dark");
  const [textColor, setTextColor] = useState("black");
  const [containerColor, setContainerColor]=useState("white")
  return (
    <>
      <div className="container">
        <DarkMode name={theme} onChange={handleThemeChange} />
      </div>
      <Textareas title="Text Editing" txtclr={textColor} conclr={containerColor}/>

      {/* <div className="container"></div> */}
      {/* <Navbar title="Content Convertion" aboutUs="About Us" contactUs="Contact Us"/> */}
      {/* <Navbar title="Content Convertion"/>  */}
    </>
  );
}

export default App;
