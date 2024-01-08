import React from "react";
import { useNavigate } from "react-router-dom";
const Background = () => {

    const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-screen z-[2] fixed">
        <div className="w-full py-10 absolute top-[5%] text-zinc-400 font-semibold flex justify-center text-xl" onClick={() => navigate("/Viewjobs")}>
       VIEW JOBS
        </div>

        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[14vw] leading-none tracking-tighter font-semibold text-white ani">
          SOAL.
        </h1>
      </div>
    </>
  );
};
export default Background;
