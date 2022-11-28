import '../textform/TextForm.css'
import React, { useState } from 'react'



function TextForm() {

    const [defaultText, textchange] = useState("Type Here!");

    const handleUpperCaseClik = () => {
        console.log("UpperCase button is clicked");
        let newText =  defaultText.toUpperCase();
        console.log(newText);
    }

    return (
        <>
            <div className="mb-3 textform">
                <label htmlFor="examplehtmlFormControlInput1" className="htmlForm-label">Type your text below.</label>
                <textarea className="htmlForm-control textbox" id="examplehtmlFormControlTextarea1" rows="8" placeholder={defaultText}></textarea>
            </div>

            <button className="btn btn-primary buttonUppercase" onClick={handleUpperCaseClik}>Convert to UPPER CASE</button>
        </>
    );
}




export default TextForm;