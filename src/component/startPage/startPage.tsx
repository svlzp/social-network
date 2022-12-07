import React from "react";




const StartPage =()=>{

const url:string = "https://images.unsplash.com/photo-1533745848184-3db07256e163?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2VsY29tZXxlbnwwfHwwfHw%3D&w=1000&q=80"

    return(
        <div>
            <img src={url} alt='start page'/>
        </div>
    )
}
export default StartPage;