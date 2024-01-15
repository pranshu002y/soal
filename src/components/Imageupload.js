import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
const Imageupload = () => {
  const [imageUrl, setImageUrl] = useState([]);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    company: ""
  });

  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleImageupload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }

      setLoading(true);

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }

      formData.append("upload_preset", "ml_default");
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzvxsgooe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();

      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (imageUrl.length === 0) {
      console.error("No image to save");
      return;
    }

    try {
      const def = {
        Image: imageUrl[0],
        company: data.company,
      };

      const response = await axios.post("https://soalbackend.onrender.com/auth/upload/image", def);
      console.log("Save operation complete", response.data);

      navigate("/"); // Call the navigate function to go to the homepage

    } catch (err) {
      console.error(err, "Save operation failed");
    }
  };

  return (
    <div>
      <Nav />
      <div className="upload-image">
        <article className="article-1">
          <figure className="input">
            <input
              type="file"
              className="input-email"
              id="passwordInput"
              placeholder="Enter your text"
              name="image_url"
              onChange={handleImageupload}
              required
            />
          </figure>
          <div className="input-margin arti ">
            <input
              type="text"
              className="input-email"
              id="emailInput"
              placeholder="Enter the Company name"
              value={data.company}
              onChange={(e) => setData({ ...data, company: e.target.value })}
            />
            <p>Upload if you have any job post!</p>
          </div>
        </article>

        <div className="save-it">
          <button onClick={handleSave} disabled={imageUrl.length === 0 || loading}>
            Post Image
          </button>
        </div>
        {loading && <p>Hang On Image is being uploaded ...</p>}
      </div>
    </div>
  );
};

export default Imageupload;
