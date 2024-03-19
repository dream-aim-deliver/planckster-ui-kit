// import { expect, describe, it } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { ResearchContextPage } from "@/components/researchcontextpage";
// import axios from "axios";
// import MockAdapter from "axios-mock-adapter";

// describe("ResearchContextPage", () => {
//   it("renders with the correct title", async () => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("/api/researchcontexts").reply(200, [{ id: "1", title: "Test Conversation" }]);

//     render(<ResearchContextPage cards={[{ id: "1", title: "Test Conversation" }]} />);

//     const pageTitle = screen.getByText("Research Context");
//     expect(pageTitle).toBeTruthy();
//   });

//   it("contains at least one card", async () => {
//     const mock = new MockAdapter(axios);
//     mock.onGet("/api/researchcontexts").reply(200, [{ id: "1", title: "Test Conversation" }]);

//     render(<ResearchContextPage cards={[{ id: "1", title: "Test Conversation" }]} />);

//     const card = screen.getByTestId("card"); // Assuming card id is unique
//     expect(card).toBeTruthy();
//   });
// });
// researchcontextpage.test.tsx
import { expect, describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { ResearchContextPage } from "@/components/researchcontextpage";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { act } from "react-dom/test-utils"; // Import act

describe("ResearchContextPage", () => {
  it("renders with the correct title", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      // Wrap state updates in act
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
        />,
      );
    });

    const pageTitle = screen.getByText("Research Context");
    expect(pageTitle).toBeTruthy();
  });

  it("contains at least one card", async () => {
    const mock = new MockAdapter(axios);
    mock
      .onGet("/api/researchcontexts")
      .reply(200, [{ id: "1", title: "Test Conversation" }]);

    await act(async () => {
      // Wrap state updates in act
      render(
        <ResearchContextPage
          cards={[{ id: "1", title: "Test Conversation" }]}
        />,
      );
    });

    const card = screen.getByTestId("card"); // Assuming card id is unique
    expect(card).toBeTruthy();
  });
});
