import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Card = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const getimage = async () => {
    try {
      const res = await axios.get('https://soalbackend.onrender.com/auth/getimage/image', {
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

  const handleImageClick = (image) => {
    setSelectedImage(image);
    navigate("/Photoview");
  };

  return (
    <>
      {data.map((e) => (
        <div
          key={e.id}
          className="relative w-60 h-72 rounded-[40px] bg0 text-white py-5 px-5 overflow-hidden z-[9] card-hover"
          onClick={() => handleImageClick(e)}
        >
          {/* Your image content */}
          <div className="lorem">
            <p className="text-sm mt-5 font-semibold leading-tight">{e.company}</p>
          </div>
          <div className="footer absolute bottom-0 w-full left-0">
            <div className="flex items-center justify-between mb-3 px-8 py-3">
              <h5>4.5MB</h5>
              <span className="w-7 h-7 bg-zinc-200 rounded-full flex items-center ">
              </span>
            </div>
            <div className="tag w-full py-4 bg-green-600 flex items-center justify-center open">
              <h3 className="text-sm font-semibold ">OPEN NOW</h3>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
