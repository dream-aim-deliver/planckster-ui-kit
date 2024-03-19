import React, { useState, useEffect } from "react";

export interface ChatMessageProps {
  senderName: string;
  senderImage: string;
  message: string;
  sentTime: string;
  isDelivered?: boolean; // prop for delivered status
  repliedToId?: string; // prop for ID of replied-to message
  role?: "user" | "llm"; // prop for specifying alignment
}

export interface Message {
  senderName: string;
  senderImage: string;
  message: string;
  sentTime: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  senderName,
  senderImage,
  message,
  sentTime,
  isDelivered,
  repliedToId,
  role = "user", // default to "user" role if not specified
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [repliedToMessage, setRepliedToMessage] = useState<Message | null>(
    null,
  );

  const handleOpenDropdown = () => setIsOpen(!isOpen);
  const handleCloseDropdown = () => setIsOpen(false);

  // Fetch replied-to message details (when backend connected)
  useEffect(() => {
    const fetchRepliedToMessage = async () => {
      if (!repliedToId) return; // Exit if no repliedToId provided

      try {
        const response = await fetch(`/api/messages/${repliedToId}`);
        if (response.ok) {
          const data = await response.json();
          setRepliedToMessage(data);
        } else {
          console.error("Failed to fetch replied-to message:", response.status);
        }
      } catch (error) {
        console.error("Error fetching replied-to message:", error);
      }
    };
    fetchRepliedToMessage();
  }, [repliedToId]);

  // Determine container alignment class based on role prop
  const containerClass =
    role === "user"
      ? "items-end gap-2.5 justify-end" // Align right for user
      : "items-start gap-2.5 justify-start"; // Align left for llm

  // Determine message container background color based on role prop
  const messageContainerClass =
    "bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700 border border-gray-200"; // Use same background color for both roles

  // Determine dropdown menu position based on role prop
  const dropdownPosition = role === "user" ? "right-full" : "left-full";

  return (
    <div className={`flex ${containerClass}`}>
      {role === "llm" && (
        <img
          className="w-8 h-8 rounded-full"
          src={senderImage}
          alt={`${senderName} image`}
        />
      )}
      <div className="relative">
        <div
          className={`flex flex-col max-w-[320px] leading-1.5 p-4 border-gray-200 ${messageContainerClass}`}
        >
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <span className="text-sm font-semibold text-gray-900 dark:text-white">
              {senderName}
            </span>
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              {sentTime}
            </span>
          </div>
          {repliedToId && repliedToMessage && (
            <ReplyReference repliedToMessage={repliedToMessage} />
          )}
          <p
            className="text-sm font-normal py-2.5 text-gray-900 dark:text-white"
            style={{ wordWrap: "break-word" }}
          >
            {message}
          </p>
          {isDelivered && (
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Delivered
            </span>
          )}
        </div>
        <button
          type="button"
          className={`absolute top-0 ${dropdownPosition} inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600`}
          onClick={handleOpenDropdown}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 4 15"
          >
            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>
        </button>
        {isOpen && (
          <div
            className={`absolute top-0 ${dropdownPosition} mt-2 z-10 w-40 rounded-lg shadow bg-white dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseDropdown}
                >
                  Reply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseDropdown}
                >
                  Forward
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseDropdown}
                >
                  Copy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseDropdown}
                >
                  Report
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={handleCloseDropdown}
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
      {role === "user" && (
        <img
          className="w-8 h-8 rounded-full"
          src={senderImage}
          alt={`${senderName} image`}
        />
      )}
    </div>
  );
};

const ReplyReference: React.FC<{ repliedToMessage: Message }> = ({
  repliedToMessage,
}) => {
  return (
    <div className="flex items-start gap-2.5 bg-gray-200 dark:bg-gray-800 p-2.5 rounded-md mt-2">
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          In reply to
        </span>
        <img
          className="w-5 h-5 rounded-full"
          src={repliedToMessage.senderImage}
          alt={`${repliedToMessage.senderName} image`}
        />
        <span className="text-xs font-semibold text-gray-900 dark:text-white">
          {repliedToMessage.senderName}
        </span>
      </div>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-300">
        {repliedToMessage.message}
      </p>
    </div>
  );
};

export default ChatMessage;
