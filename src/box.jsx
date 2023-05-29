import "./box.css"

function Boxes(props){
    return (
        <>
        <div className="box1" onClick={()=> props.onClick(props.index)} style={{backgroundColor:props.color}}></div>
        </>
    )
}

export default Boxes;