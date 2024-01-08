import React from "react";

const Photoview = () => {
  const handleDownload = () => {
    // Replace the image URL with the actual URL of the image you want to download
    const imageUrl =
      "https://res.cloudinary.com/dpiatasuq/image/upload/v1700977041/scout/244188868_570354887420649_1669272980551569962_n_vcj6ik.jpg";

    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = "downloaded_image.jpg";

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="select">
      <div className="app__videos">
        <main>
          <div className="card-2">
            <img
              src="https://res.cloudinary.com/dpiatasuq/image/upload/v1700977041/scout/244188868_570354887420649_1669272980551569962_n_vcj6ik.jpg"
              alt="Card"
            />
            <div className="card-content">
              <h2 onClick={handleDownload}>Click to Download Image</h2>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Photoview;
