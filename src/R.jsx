function ClassEuipment({label, fan, bench, white_board, projector, ac, watch, laptop, students, switch_board }) {
    return (
        <div style={{textAlign: 'left'}}>
            <h1>{label}</h1>
            <label >Fan: </label>
            <span>{fan}</span><br/>
            <label>Bench: </label>
            <span>{bench}</span><br/>
            <label>White Board: </label>
            <span>{white_board}</span><br/>
            <label>Projector: </label>
            <span>{projector}</span><br/>
            <label>AC: </label>
            <span>{ac}</span><br/>
            <label>Watch: </label>
            <span>{watch}</span><br/>
            <label>Laptop: </label>
            <span>{laptop}</span><br/>
            <label>Students: </label>
            <span>{students}</span><br/>
            <label>Switch board: </label>
            <span>{switch_board}</span><br/>
        </div>
    )
}

export default ClassEuipment;
