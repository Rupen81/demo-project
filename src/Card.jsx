import { useRef } from "react";
import { colors } from "./App";

function Card({ name, grno, cource, dob, address }) {
    const cardRef = useRef();

    const changeColor=() => {
        cardRef.current.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    }
    return (
        <div onClick={changeColor}style={{cursor:'pointer', display: 'flex', justifyContent: 'center', width: '100%', transform: 'translate(-50%, -50%)', top:'50%', left:'50%', position:'absolute'}}>
            <div ref={cardRef} style={{ textAlign: 'center', border:'2px solid black', padding:'30px', boxShadow:'0 0 10px 0 rgba(0, 0, 0, 0.5)', height:'55vh', }}>
                <img alt="Darshil gando chhe" src="Apire-removebg-preview.png" style={{ height: "100px" }} /><br></br>
                <img alt="" src="TUS00592.jpg" style={{ height: "150px", borderRadius: "50px" }}></img><br></br>
                <span style={{ fontFamily: 'cursive', fontSize: '30px', color: 'rgb(40, 114, 212)' }}>{name}</span><br></br>
                <div style={{ textAlign: "left", marginTop: '10px' }}>
                    <label>Gr No.:</label>
                    <span>{grno}</span><br></br>
                    <label>Cource:</label>
                    <span>{cource}</span><br></br>
                    <label>DOB:</label>
                    <span>{dob}</span><br></br>
                    <label>Address:</label>
                    <span>{address}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;