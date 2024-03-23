import React from "react";
import ReactMarkdown from "react-markdown";
import { Image } from "@/components/image";

interface ChatDisplayProps {
  username: string;
  message: string;
  userImage: string;
  timestamp: string;
  image?: string; // Optional image URL to be displayed in the chat
  markdown?: boolean; // Optional flag to indicate if the message is in Markdown format
}

const ChatDisplay: React.FC<ChatDisplayProps> = ({
  username,
  message,
  userImage,
  timestamp,
  image,
  markdown = false,
}) => {
  return (
    <div className="bg-lightBlue-100 p-4 rounded-lg">
      {/* Background div */}
      <div className="flex items-end justify-end gap-2.5">
        <div className="flex flex-col gap-1 w-full max-w-[320px]">
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {username}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {timestamp}
            </span>
          </div>
          <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
            {markdown ? (
              <div
                className="text-sm font-normal text-gray-900 dark:text-white overflow-hidden overflow-ellipsis"
                style={{ wordWrap: "break-word" }}
              >
                <ReactMarkdown>{message}</ReactMarkdown>
              </div>
            ) : (
              <p
                className="text-sm font-normal text-gray-900 dark:text-white overflow-hidden overflow-ellipsis"
                style={{ wordWrap: "break-word" }}
              >
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
