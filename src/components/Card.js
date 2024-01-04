import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
const Card = ({data }) => {
  return (
  
      <div className="relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white py-5 px-5 overflow-hidden">
        <FaRegFileAlt />
        <div className="lorem"> 
        <p className="text-sm mt-5 font-semibold leading-tight  ">
          loremloremloremloremloremloremloremloremloremloremloremloremloremlorem
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
          <h3 className="text-sm font-semibold">DOWNLOAD NOW</h3>
          </div>
        </div>
      </div>
    
  );
};
export default Card;
