import React from 'react'
import { styled } from 'styled-components'

function ReactList() {
    return (
        <>
            <Box color='orange' borderColor='blue' bgColor='pink'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
            </Box>
            <Box color='pink' borderColor='white' bgColor='purple'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
            </Box>
            <Box color='black' borderColor='green' bgColor='cyan'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
            </Box>
            <Box color='white' borderColor='lightpink' bgColor='gray'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum voluptatum beatae nobis quibusdam id accusamus! Molestiae pariatur quae quia similique recusandae? Placeat, ipsa quisquam. Sint minus ducimus a nam.</p>
            </Box>
        </>
    )
}

const Box = styled.div`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    border: 5px dashed ${(props) => props.borderColor};
    margin-bottom: 10px;
`
export default ReactList