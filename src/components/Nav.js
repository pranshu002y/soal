import React from "react";
import { useNavigate } from "react-router-dom";



const Nav = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-bar ">
      <div className="view" onClick={() => navigate("/Viewjobs")}>
       VIEW JOBS
        </div>

        <div className="view" onClick={() => navigate("/Home")}>
       HOMEPAGE
        </div>  
       
        <div className="create" onClick={() => navigate("/image")}>
       CREATE POST
        </div> 
      </div>
    </>
  );
};

export default Nav;
