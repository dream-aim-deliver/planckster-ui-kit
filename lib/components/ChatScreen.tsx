import React, { useState } from "react";
import { ChatInput } from "./chatinput";
import { ChatDisplay } from "./chatdisplay";
import { Reply } from "./reply";
import { ReplyProps } from "./reply/Reply";
import { Message } from "./reply/Reply";
import { ChatHeader } from "./chatheader";

export interface ChatScreenProps {
  initialMessages?: Message[];
  replyProps: ReplyProps;
}

const ChatScreen: React.FC<ChatScreenProps> = ({
  initialMessages = [],
  replyProps,
}) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState<string>("");

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      senderName: "User 1",
      senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
      message: message,
      sentTime: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setNewMessage("");
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      {/* Header */}
      <ChatHeader />

      {/* Chat Display */}
      <div className="flex-1 overflow-y-auto px-4 py-8 space-y-4 bg-blue-100 dark:bg-blue-800">
        {messages.map((message, index) => (
          <ChatDisplay
            key={index}
            username={message.senderName}
            message={message.message}
            userImage={message.senderImage}
            timestamp={message.sentTime}
          />
        ))}
      </div>

      {/* Reply Component */}
      <div className="absolute bottom-28 left-4 right-4">
        <Reply {...replyProps} />
      </div>

      {/* Chat Input */}
      <ChatInput
        onSendMessage={handleSendMessage}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
    </div>
  );
};

export default ChatScreen;
