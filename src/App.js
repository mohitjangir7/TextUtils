
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm'
// import About from './components/About';
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#06213c"
      showAlert("The Dark Mode Has Been Enabled", "success");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("The Dark Mode Has Been Disabled", "success");
    }
  }
  return (
    <>
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} About="About TextUtils" />
      <Alert alert={alert} />
      <TextForm  mode={mode}showAlert={showAlert} heading="Enter the textarea to analyze" />

      {/* <Router>
        <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} About="About TextUtils" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the textarea to analyze" />} />
          </Routes>
        </div>
      </Router> */}
    </>
  );
}

export default App;
