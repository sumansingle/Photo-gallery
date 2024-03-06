// DownloadButton.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const DownloadButton = ({ imageUrl }) => {
  const downloadImage = () => {
    // Create a temporary anchor element
    const anchor = document.createElement("a");
    anchor.href = imageUrl;
    anchor.download = "image.jpg";
    anchor.click();
  };

  return (
    <button
      style={{
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "8px 12px",
        borderRadius: "4px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
      onClick={downloadImage}
    >
      <FontAwesomeIcon icon={faDownload} style={{ marginRight: "8px" }} />
    </button>
  );
};

export default DownloadButton;
