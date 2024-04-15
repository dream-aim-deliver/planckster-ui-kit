"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChatHeader } from "../chatheader";
import { ChatMessage, ChatMessageProps } from "../chatmessage";
import { ChatInput } from "../chatinput";
import ChatDisplay from "../chatdisplay/ChatDisplay";
import { ChatDisplayProps } from "../chatdisplay/ChatDisplay";

export interface ChatPageProps {
  chatMessageProps: ChatMessageProps[];
  isDisabled?: boolean;
  showLoadingIndicator?: boolean;
}

const ChatPage: React.FC<ChatPageProps> = ({
  chatMessageProps,
  isDisabled = false,
  showLoadingIndicator = false,
}) => {
  const [newMessage, setNewMessage] = useState<string>("");
  const [messages, setMessages] = useState<ChatDisplayProps[]>([]);
  const endOfChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (
    message: string,
    markdown: boolean,
    image?: string,
  ) => {
    const newMessageObj: ChatDisplayProps = {
      username: "User 1",
      message: message,
      userImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
      timestamp: new Date().toLocaleTimeString(),
      markdown: markdown,
      image: image,
    };
    setMessages([...messages, newMessageObj]);
    setNewMessage("");
  };

  const scrollToBottom = () => {
    if (endOfChatRef.current) {
      endOfChatRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      <div className="sticky top-0 z-10">
        <ChatHeader />
      </div>
      <div
        className="flex-1 overflow-y-auto px-4 py-8 space-y-4 bg-blue-100 dark:bg-blue-800"
        style={{ paddingBottom: "6rem" }}
      >
        {chatMessageProps.map((reply, index) => (
          <ChatMessage key={`reply-${index}`} {...reply} />
        ))}
        {messages.map((msg, index) => (
          <ChatDisplay
            key={`message-${index}`}
            username={msg.username}
            message={msg.message}
            userImage={msg.userImage}
            timestamp={msg.timestamp}
            markdown={msg.markdown}
            image={msg.image}
          />
        ))}
        {showLoadingIndicator && (
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse"></div>
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse delay-150"></div>
            <div className="w-4 h-4 rounded-full bg-gray-400 animate-pulse delay-300"></div>
          </div>
        )}
        <div ref={endOfChatRef} />
      </div>
      <ChatInput
        onSendMessage={(message) => handleSendMessage(message, true)} // Assuming all new messages are in Markdown
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default ChatPage;
