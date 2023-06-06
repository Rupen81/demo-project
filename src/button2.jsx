import { Component } from "react"
import "./button.css"
import { colors } from "./App";

// function Button() {
//     const [bgColor, setBgColor] = useState("skyblue");
//     const [condition, setCondition] = useState(false);

//     return (
//         <>
//             <div className="button">
//                 <button onClick={() => {setBgColor(colors[Math.floor(Math.random()*colors.length)])
//                 ; setCondition(!condition);
//                 }} style={{ backgroundColor: bgColor, color: ["blue" , "black" , "purple", "green"].includes(bgColor) && "white"}}>
//                     Start
//                     </button>
//         </div >
//         </>
//     )
// }

class Button extends Component {
    constructor(){
        super();
        this.state = {}
    }
    render(){
        return (
            <div className="button">
                <button onClick={() => {}}
                style={{ backgroundColor: "blue", color: "white"}}
                >{this.props.title}</button>
            </div>
        )
    }
}

export default Button;