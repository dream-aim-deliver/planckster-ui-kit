// import { expect, describe, it } from "vitest";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { ConversationPage } from "@/components/conversationpage";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// describe("ConversationPage", () => {
//   it("renders with the correct title", async () => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("/api/conversations").reply(200, [{ id: "1", title: "Test Conversation" }]);

//     render(<ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />);

//     const pageTitle = screen.getByText("Conversations");
//     expect(pageTitle).toBeTruthy();
//   });

//   it("opens modal when 'New Conversation' button is clicked", async () => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("/api/conversations").reply(200, [{ id: "1", title: "Test Conversation" }]);
//     mock.onPost("/api/conversations").reply(200, { id: "2", title: "New Test Conversation" });

//     render(<ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />);

//     const addButton = screen.getByText("+ New Conversation");
//     fireEvent.click(addButton);
//     const modal = screen.getByText("Create New Conversation"); // Assuming modal text
//     expect(modal).toBeTruthy();
//   });
// });
// conversationpage.test.tsx
import { expect, describe, it } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ConversationPage } from "@/components/conversationpage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils"; // Import act

describe("ConversationPage", () => {
  it("renders with the correct title", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/conversations")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      // Wrap state updates in act
      render(
        <ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />,
      );
    });

    const pageTitle = screen.getByText("Conversations");
    expect(pageTitle).toBeTruthy();
  });

  it("opens modal when 'New Conversation' button is clicked", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/conversations")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);
    mock
      .onPost("/api/conversations")
      .reply(200, { id: "2", title: "New Test Conversation" });

    await act(async () => {
      // Wrap state updates in act
      render(
        <ConversationPage convs={[{ id: "1", title: "Test Conversation" }]} />,
      );
    });

    const addButton = screen.getByText("+ New Conversation");
    fireEvent.click(addButton);
    const modal = screen.getByText("Create New Conversation"); // Assuming modal text
    expect(modal).toBeTruthy();
  });
});
