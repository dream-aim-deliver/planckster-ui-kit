import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ maxWidth: "100%", height: "auto" }}
      onError={(e) => {
        // Handle image loading error
        e.currentTarget.src = "https://i.ibb.co/wS90Hm5/imageerror.png"; // Fallback image
      }}
    />
  );
};

export default Image;
