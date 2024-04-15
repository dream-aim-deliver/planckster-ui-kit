import { render, fireEvent, screen } from "@testing-library/react";
import ChatPage from "@/components/chatpage/ChatPage";
import "@testing-library/jest-dom";

describe("ChatPage Component", () => {
  test("renders chat messages correctly", () => {
    const chatMessages = [
      {
        senderName: "User 2",
        senderImage: "https://i.ibb.co/gvynGqz/clipart1363971.png",
        message: "Hello, how are you?",
        sentTime: "10:00 AM",
      },
    ];

    render(
      <ChatPage
        chatMessageProps={chatMessages}
        isDisabled={false}
        showLoadingIndicator={false}
      />,
    );

    chatMessages.forEach((message) => {
      const senderNameElement = screen.getByText(message.senderName);
      const messageTextElement = screen.getByText(message.message);
      expect(senderNameElement).toBeInTheDocument();
      expect(messageTextElement).toBeInTheDocument();
    });
  });

  test("allows sending a new message", () => {
    render(
      <ChatPage
        chatMessageProps={[]}
        isDisabled={false}
        showLoadingIndicator={false}
      />,
    );

    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Test message" } });
    expect(inputElement).toHaveValue("Test message");

    const sendButton = screen.getByRole("button", { name: /send/i });
    fireEvent.click(sendButton);
    expect(inputElement).toHaveValue("");
  });
});
