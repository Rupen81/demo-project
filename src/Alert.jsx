import React from 'react'
import { styled } from 'styled-components'

function Alert({show, onClose }) {
  return (
    show && <Box>
    <i onClick={onClose} className='fas fa-close'></i>
      <h3 >Login Succesfull!</h3>
    </Box>
  )
}

const Box = styled.div`
background: rgb(196,250,196);
position: fixed;
top: 10px;
right: 10px;
display: flex;
align-items: center;
border: 2px solid black;
width : 30%;
padding: 15px;
border-radius: 20px;
font-family: sans-serif;
i {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

h3{
  margin: 20px 30px;
}
`;


export default Alert