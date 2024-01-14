import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "./Nav";

const Photoview = () => {
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

  const handleDownload = () => {
    if (data && data.length > 0 && data[0].Image) {
      const imageUrl = data[0].Image;

      const anchor = document.createElement("a");
      anchor.href = imageUrl;
      anchor.download = "downloaded_image.jpg";

      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      console.error("Image data is not available");
    }
  };

  return (
    <div>
<Nav/>
    <div className="select">
      <div className="app__videos">
        <main>
          <div className="card-2">
            <img
              src={data && data.length > 0 && data[0].Image}
              alt="Card"
            />
            <div className="card-content">
              <h2 onClick={handleDownload}>Click to Download Image</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
    </div>
    
  );
};

export default Photoview;
