import React, { useState } from "react";
import DownloadIcon from "./DownloadIcon";

export interface DownloadButtonProps {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  sources: any[];
  selectedIds: Record<string, boolean>;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  sources,
  selectedIds,
}) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = async () => {
    setIsDownloading(true);

    const toDownload = sources.filter(
      (source) =>
        selectedIds[source.id] || Object.keys(selectedIds).length === 0,
    );

    try {
      const responses = await Promise.all(
        toDownload.map((source) => fetch(source.downloadUrl)),
      );
      const blobs = await Promise.all(responses.map((res) => res.blob()));

      const combinedBlob = new Blob(blobs, { type: "application/zip" });
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(combinedBlob);
      link.download = "Sources.zip";
      link.style.display = "none";
      document.body.appendChild(link);

      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    } catch (error) {
      console.error("Download error:", error);
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
