import "./App.css";
// import Navbar from './components/Navbar';
import Textareas from "./components/Textareas";
import DarkMode from "./components/DarkMode";
import Alert from "./components/Alert";
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
      showAlert("Light mode has been enabled","success")
      console.log(textColor+"\n"+containerColor)
    }
    else{
      document.getElementById("bodyID").style.background = "#242521"
      setTextColor("white")
      setContainerColor("#4D4D4B")
      console.log(textColor+"\n"+containerColor)
      showAlert("Dark mode has been enabled","success")
    }
  };

  //theme end here

  //Show Alert Message function
    const showAlert = (message,type)=>{
      setAlert({
        msg:message,typ:type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1400);
    }
  //show alert end here

  const [theme, setTheme] = useState("Dark");
  const [textColor, setTextColor] = useState("black");
  const [containerColor, setContainerColor]=useState("white")
  const [alert,setAlert] = useState(null)
  return (
    <>
    <Alert alert={alert}/>
      <div className="container">
        <DarkMode name={theme} onChange={handleThemeChange} />
      </div>
     
      <Textareas title="Text Editing" txtclr={textColor} conclr={containerColor} showAlert={showAlert}/>

  
    </>
  );
}

export default App;
