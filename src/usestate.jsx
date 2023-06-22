import { useState } from "react";
import { words } from "./App";
import "./usestate.css"

function Quote() {
    const [text, setText] = useState("Success");
    return (
        <div>
            <h1 className="quote">Success</h1>
            <h1 className="quote">Faliure</h1>
            <h1 className="quote">Motivation</h1>
            <h1 className="quote">Work hard</h1>
            <h1 className="quote">Learning</h1>
            <h1 className="quote">Belive</h1>
            <h1 className="quote">Don't judge</h1>
            <h1 className="quote-main">{text}</h1>
            {/* <button onClick={() => setText(words[Math.floor(Math.random() * words.length)])}>change text</button> */}
        </div>
    )
}
export default Quote;