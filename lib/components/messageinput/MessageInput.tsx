import React, { useState } from "react";

interface MessageInputProps {
  onSendMessage: (message: string) => void; // Function to handle sending messages
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  // Destructure props directly
  const [message, setMessage] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (message.trim()) {
      // Check if message is not empty
      onSendMessage(message); // Call the provided function to send message
      setMessage(""); // Clear message input after sending
    }
  };

  return (
    <form className="message-input" onSubmit={handleSubmit}>
      <textarea
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        rows={3} // Set initial rows for the textarea
      />
      <button type="submit" disabled={!message.trim()}>
        Send
      </button>
    </form>
  );
};

export default MessageInput;
