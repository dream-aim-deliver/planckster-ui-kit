import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width = 300,
  height = 300,
}) => {
  // Function to determine if the src is a base64-encoded image
  const isBase64 = (str: string) => {
    return str.startsWith("data:image");
  };

  // Compute the final src to use in the img tag
  const finalSrc = isBase64(src) ? src : src;

  return (
    <img
      src={finalSrc}
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
