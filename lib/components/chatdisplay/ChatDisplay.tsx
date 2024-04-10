import React from "react";
import ReactMarkdown from "react-markdown";
import { Image } from "@/components/image";

export interface ChatDisplayProps {
  username: string;
  message: string;
  userImage: string;
  timestamp: string;
  markdown?: boolean; // Optional
  image?: string; // Optional
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({
  username,
  message,
  userImage,
  timestamp,
  markdown,
  image,
}) => {
  return (
    <div className="bg-lightBlue-100 p-4 rounded-lg">
      <div className="flex items-end justify-end gap-2.5">
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {username}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {timestamp}
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            {markdown ? (
              <ReactMarkdown className="text-sm font-normal text-gray-900 dark:text-white">
                {message}
              </ReactMarkdown>
            ) : (
              <p className="text-sm font-normal text-gray-900 dark:text-white">
                {message}
              </p>
            )}
            {image && <Image src={image} alt="Message Image" />}
          </div>
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Sent
          </span>
        </div>
        <img className="w-8 h-8 rounded-full" src={userImage} alt={username} />
      </div>
    </div>
  );
};

export default ChatDisplay;
