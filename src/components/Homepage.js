import React from "react";
import Background from "./Background";

import Nav from "./Nav";

const Homepage = ()=>{
    return(
   <div>
    <div className="w-full h-full bg-zinc-800 relative">
    <Background/>
    {/* <Foreground/> */}
    <Nav/>
  </div>

  </div>
    )}

export default Homepage;