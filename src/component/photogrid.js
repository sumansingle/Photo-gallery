import React, { useState } from "react";
import "../../src/styles.css";

function Photogrid(props) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="photogrid">
      <img
        src={props.src}
        alt={props.id}
        height={200}
        width={250}
        onClick={handleClick}
      />
      <p>{props.title}</p>

      {showPopup && (
        <div className="popupoverlay" onClick={handleClosePopup}>
          <div className="popupcontent">
            <img src={props.src} alt={props.id} />
            <p>{props.title}</p>
            <button onClick={handleClosePopup}>❌</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photogrid;
