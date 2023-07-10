import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { ThemeContext } from './ThemeProvider';
import { Context } from './globalContext';

function Header() {
    const globalContext = useContext(Context);
    const [tab, setTab] = useState("Home");
    const theme = useContext(ThemeContext);

    return (
        <Nav>
            <ul>
                <li><Link className={tab === 'Home' && 'active'} onClick={() => setTab("Home")} to="/">Home</Link></li>
                <li><Link className={tab === 'Login' && 'active'} onClick={() => setTab("Login")} to="/Login">Login</Link></li>
                <li><Link className={tab === 'Register' && 'active'} onClick={() => setTab("Register")} to="/Register">Register</Link></li>
                <li><SearchField type='search' onChange={(e) => globalContext.setSearchText(e.target.value)} placeholder='Search here' /></li>
                {/* {
                    theme.mode === 'light' ?
                        <li><Link onClick={() => theme.setMode(theme.mode === 'light' ? 'dark' : 'light')} style={{ color: '#212530' }}><i className='fas fa-sun'></i></Link></li>
                        :
                        <li><Link onClick={() => theme.setMode(theme.mode === 'dark' ? 'light' : 'dark')} style={{ color: '#212530' }}><i className='fas fa-moon'></i></Link></li>
                } */}

                <Colorwrapper>
                    <Color onClick={() => theme.setMode('red')} bgcolor={'red'} />
                    <Color onClick={() => theme.setMode('blue')} bgcolor={'blue'} />
                    <Color onClick={() => theme.setMode('green')} bgcolor={'green'} />
                    <Color onClick={() => theme.setMode('cyan')} bgcolor={'cyan'} />
                </Colorwrapper>
            </ul>
        </Nav>
    )
}

const Nav = styled.nav`
    ul{
        margin: 0;
        display: flex;
        list-style-type: none;
        gap:20px;
        cursor:pointer;
        color: black;
        aling-item: center;
        justify-content:center;
        padding-left: 0;
        
    a{
        background-color: skyblue;
        padding: 10px 20px;
        border: 1px dashed black;
        text-decoration:none;
        font-size:20px;
         color: black;
&:hover{
    color:white;
    }
&.active{
     background-color:black;
     color:white;
    }
        }
    }
`;

const Colorwrapper = styled.div`
position : fixed;
top: 10px;
right: 10px;
display: flex;
flex-direction: column;

`;

const Color = styled.div`
background-color: ${props => props.bgcolor};
width: 30px;
height: 30px;
border-radius: 100%;
border: 2px solid white;
`;

const SearchField = styled.input`
height: 38px;
margin: 0;
width: 300px;
padding-left: 10px;
`

export default Header