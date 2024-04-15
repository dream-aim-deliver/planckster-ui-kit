"use client";
import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Image } from "@/components/image";

export interface ChatMessageProps {
  senderName: string;
  senderImage: string;
  message: string;
  sentTime: string;
  isDelivered?: boolean;
  repliedToId?: string;
  role?: "user" | "llm";
  markdown?: boolean;
  image?: string;
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
  role = "user",
  markdown,
  image,
}) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */

  const [repliedToMessage, setRepliedToMessage] = useState<Message | null>(
    null,
  );

  useEffect(() => {
    // Existing logic
  }, [repliedToId]);

  const containerClass =
    role === "user" ? "items-end justify-end" : "items-start justify-start";
  const messageContainerClass =
    "bg-gray-100 dark:bg-gray-700 border border-gray-200 rounded-xl p-4";

  return (
    <div className={`flex ${containerClass}`}>
      {role === "llm" && (
        <img
          className="w-8 h-8 rounded-full"
          src={senderImage}
          alt={`${senderName} image`}
        />
      )}
      <div>
        <div className={messageContainerClass}>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold">{senderName}</span>
            <span className="text-sm text-gray-500">{sentTime}</span>
          </div>
          {repliedToId && repliedToMessage && (
            <ReplyReference repliedToMessage={repliedToMessage} />
          )}
          <div className="py-2">
            {markdown ? (
              <ReactMarkdown className="prose dark:prose-dark">
                {message}
              </ReactMarkdown>
            ) : (
              <p>{message}</p>
            )}
          </div>
          {image && <Image src={image} alt="Embedded Message Image" />}
          {isDelivered && (
            <span className="text-sm text-gray-500">Delivered</span>
          )}
        </div>
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
