import React, { useEffect, useState } from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Card = () => {
  const navigate = useNavigate();

  const [data, setData] = useState();

  const getimage = async () => {
    try {
      const res = await axios.get('http://localhost:5500/auth/getimage/image', {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getimage();
  }, []);

  return (
  <>
{data && data.map((e)=> (

<div className="relative w-60 h-72 rounded-[40px] bg0 text-white py-5 px-5 overflow-hidden z-[9] card-hover" onClick={() => navigate("/Photoview")} key={e.id}>
        <FaRegFileAlt />
        <div className="lorem"> 
        <p className="text-sm mt-5 font-semibold leading-tight  ">
          {e.company}
        </p>
        </div>
       
        <div className="footer absolute bottom-0  w-full left-0">
          <div className="flex items-center justify-between mb-3 px-8 py-3">
            <h5>4.5MB</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            <LuDownload color="#fff"/>  
            </span>
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">OPEN NOW</h3>
          </div>
        </div>
      </div>
      
))}
  </>
      
    
  );
};
export default Card;
