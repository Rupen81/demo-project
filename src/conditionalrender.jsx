import React from 'react'

function Conditionalrender({ isLoggedIn }) {
    // console.log(isLoggedIn);
    return (
        isLoggedIn && <div>Hello World</div>
    )
    // return(
    //     isLoggedIn === "visit" ?
    //     <div>Please visit <a href="https://google.com"> here </a> </div> 
    //     :
    //     isLoggedIn ?
    //     <div>Welcome Ronak</div>:
    //     <div>Please login <a href="https://google.com"> here </a> </div>
    // )

    // if (isLoggedIn === 1) {
    //     return (
    //         <div>Please visit <a href="https://google.com"> here </a> </div>
    //     )
    // } else if (isLoggedIn) {
    //     return (
    //         <div>Welcome Ronak</div>
    //     )
    // } else {
    //     return (
    //         <div>Please login <a href="https://google.com"> here </a> </div>
    //     )
    // }
}


export default Conditionalrender