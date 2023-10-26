import { useState } from "react"
import React from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("btn clicked" + Text)
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    };
    const handleLoClick = () => {
        // console.log("btn clicked" + Text)
        let newText = Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success")
    };
    const handleClearClick = () => {
        let newText = "";
        setText(newText)
        props.showAlert("Text has been Cleared","success")
    };
    const handleOnChange = (event) => {
        // console.log("onchange clicked")
        setText(event.target.value);
    };
    const [Text, setText] = useState("");
    // setText("new text");
    // text= "new text" wrong way to do it
    return (
        <>
            <div className="container"style={{color: props.mode === "light"?"black":"white"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={Text} style={{backgroundColor: props.mode === "light"?"white":"grey",color: props.mode === "light"?"black":"white"}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}> Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}> Convert to Lowercase</button>
                <button className="btn btn-secondary mx-1" onClick={handleClearClick}> Clear Text</button>
            </div>

            <div className="container my-3" style={{color: props.mode === "light"?"black":"white"}}>
                <h2>Your text summary</h2>
                <p> {Text.split(" ").length} words and {Text.length} charachters</p>
                <p>  {.008 * Text.split(" ").length}  Minutes read </p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Write your text above to preview it here"}</p>
            </div>
        </>
    )
}
