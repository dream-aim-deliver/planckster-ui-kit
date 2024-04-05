import React, { useState } from "react";
import UploadIcon from "./UploadIcon";

export interface UploadButtonProps {
  // Add later if needed
}

const UploadButton: React.FC<UploadButtonProps> = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
    setUploadStatus("uploading");
    setErrorMessage("");

    const uploadUrl = "/api/upload";
    const formData = new FormData();
    if (selectedFile) {
      formData.append("myFile", selectedFile, selectedFile.name);
    }

    fetch(uploadUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Upload failed: " + response.statusText);
        }
        setUploadStatus("success");
      })
      .catch((error) => {
        console.error("Upload Error:", error);
        setUploadStatus("error");
        setErrorMessage(error.message);
      });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <label
      htmlFor="file-upload"
      className={`upload-button ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ width: "200px", height: "180px" }}
    >
      <input
        type="file"
        id="file-upload"
        accept=".txt"
        onChange={handleFileUpload}
        style={{ display: "none" }}
      />
      <div className="upload-button-wrapper">
        <UploadIcon />
        {uploadStatus === "uploading" && (
          <span className="upload-status">Uploading...</span>
        )}
        {uploadStatus === "success" && (
          <span className="upload-status">Uploaded!</span>
        )}
        {uploadStatus === "error" && (
          <span className="error-message">{errorMessage}</span>
        )}
      </div>
    </label>
  );
};

export default UploadButton;
