import React, { useState } from "react";
import { Chatinput } from "./chatinput";
import { Chatdisplay } from "./chatdisplay";
import { Reply } from "./reply";
import { ReplyProps } from "./reply/Reply";
import { Message } from "./reply/Reply";
import { Chatheader } from "./chatheader";

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
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

  // const handleReply = (reply: ReplyProps) => {
  //   // Handle reply logic here
  //   console.log('Reply:', reply);
  // };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleReply = (reply: ReplyProps) => {
    // Implement your backend API call logic here
    // Example using fetch (replace with your actual API call):
    fetch("/api/send-reply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reply),
    })
      .then((response) => response.json())
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((data) => {
        // Handle API response (e.g., update messages state if successful)
      })
      .catch((error) => {
        console.error("Error sending reply:", error);
      });
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-100 dark:bg-gray-800">
      {/* Header */}
      <Chatheader />

      {/* Chat Display */}
      <div className="flex-1 overflow-y-auto px-4 py-8 space-y-4 bg-blue-100 dark:bg-blue-800">
        {messages.map((message, index) => (
          <Chatdisplay
            key={index}
            username={message.senderName}
            message={message.message}
            userImage={message.senderImage}
            timestamp={message.sentTime}
          />
        ))}
      </div>

      {/* Chat Input */}
      <Chatinput
        onSendMessage={handleSendMessage}
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />

      {/* Reply Component */}
      <Reply
        senderName="Sender Name"
        senderImage="Sender Image URL"
        message="Reply Message"
        sentTime="Sent Time"
      />
    </div>
  );
};

export default ChatScreen;
