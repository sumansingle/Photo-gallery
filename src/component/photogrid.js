import React, { useState } from "react";
import "../../src/styles.css";
import DownloadButton from "./download";

function Photogrid(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="photogrid"
      style={{ position: "relative", display: "inline-block" }}
    >
      <img
        src={props.src}
        alt={props.id}
        height={200}
        width={250}
        onClick={handleClick}
        style={{ display: "block" }}
      />
      <DownloadButton
        imageUrl={props.src}
        style={{ position: "absolute", bottom: 10, left: 0 }}
      />
      <p>{props.title}</p>

      {showPopup && (
        <div className="popupoverlay" onClick={handleClosePopup}>
          <div className="popupcontent">
            <img src={props.src} alt={props.id} />
            <p>{props.title}</p>
            <button onClick={handleClosePopup}>❌</button>
            <DownloadButton imageUrl={props.src} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Photogrid;
