import React from "react";
import "./Loading.css"
const Loading = ()=>{
    return(
        <div className="container">
        <div className="left-side">
         <div className="card">
          <div className="card-line"></div>
          <div className="buttons"></div>
         </div>
         <div className="post">
          <div className="post-line"></div>
          <div className="screen">
           <div className="dollar">$</div>
          </div>
          <div className="numbers"></div>
          <div className="numbers-line2"></div>
         </div>
        </div>
       
       </div>
    )
}
export default Loading;