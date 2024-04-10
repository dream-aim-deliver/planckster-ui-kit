import React, { useState } from "react";
import DownloadIcon from "./DownloadIcon";

export interface DownloadButtonProps {
  //  No specific props for now, but will add later if needed
}

const DownloadButton: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async () => {
    setIsDownloading(true);

    try {
      const response = await fetch("/your-download-endpoint");

      //Headers necessary here
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(await response.blob()); // Get the raw data
      link.style.display = "none";
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
      // Handle download error
      setIsDownloading(false);
    }
  };

  return (
    <button
      className="download-button"
      onClick={downloadFile}
      disabled={isDownloading}
    >
      <DownloadIcon />
    </button>
  );
};

export default DownloadButton;
