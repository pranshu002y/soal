import React, { useEffect, useState } from "react";
import axios from 'axios';
import Nav from "./Nav";

const Photoview = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getimage = async () => {
      try {
        const res = await axios.get('https://scoutverse.onrender.com/auth/getimage/image', {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching image:", err);
        setLoading(false);
      }
    };

    getimage();
  }, []);

  const handleDownload = () => {
    if (data.length > 0 && data[0].Image) {
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
      <Nav />
      <div className="select">
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((e, index) => (
            <div className="app__videos" key={index}>
              <main>
                <div className="card-2">
                  <img
                    src={e.Image}
                    alt="Card"
                  />
                  <div className="card-content">
                    <h2 onClick={handleDownload}>Click to Download Image</h2>
                  </div>
                </div>
              </main>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Photoview;
