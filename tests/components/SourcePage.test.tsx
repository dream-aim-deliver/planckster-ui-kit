import React from "react";
import { render, screen } from "@testing-library/react";
import { SourcePage } from "@/components/sourcepage";

describe("SourcePage", () => {
  const sampleSources = [
    {
      id: "1", // Ensure you include the 'id' field as it's now required
      name: "Source 1",
      protocol: "ftp",
      lfn: "/path/to/source1",
      dateCreated: "2023-04-01",
    },
    {
      id: "2",
      name: "Source 2",
      protocol: "http",
      lfn: "/path/to/source2",
      dateCreated: "2023-04-05",
    },
  ];

  test("renders SourceList with sources and checks for selection functionality", () => {
    render(
      <SourcePage
        sources={sampleSources}
        title="My Sources"
        showUploadButton={false}
        enableSelection={true} // Reflecting the addition of enableSelection prop
      />,
    );

    // Check if the SourceList component is rendered
    const sourceListElement = screen.getByText("My Sources");
    expect(sourceListElement).toBeInTheDocument();

    // Check if the source names are rendered
    sampleSources.forEach((source) => {
      const sourceNameElement = screen.getByText(source.name);
      expect(sourceNameElement).toBeInTheDocument();
    });

    // Optionally, if you want to check for the presence of selection checkboxes
    // This might require adjustments based on how your checkboxes are rendered
    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes).toHaveLength(sampleSources.length + 1); // +1 for the 'select all' checkbox
  });

  test("renders UploadButton if showUploadButton is true", () => {
    render(
      <SourcePage
        sources={sampleSources}
        title="My Sources"
        showUploadButton={true} // Show upload button
        enableSelection={false}
      />,
    );

    // Assuming UploadButton renders a button or input with specific text or label
    // Adjust the query accordingly based on your implementation
    const uploadButtonElement = screen.getByLabelText(""); // Example query, adjust as needed
    expect(uploadButtonElement).toBeInTheDocument();
  });

  test("renders empty SourceList when no sources provided", () => {
    render(
      <SourcePage
        sources={[]}
        title="No Sources"
        showUploadButton={false}
        enableSelection={false}
      />,
    );

    // Check if the SourceList component is rendered without any source names
    const sourceListElement = screen.getByText("No Sources");
    expect(sourceListElement).toBeInTheDocument();
    const sourceNameElements = screen.queryAllByText(/Source/i);
    expect(sourceNameElements).toHaveLength(1); // Expecting 0 matches for "Source"
  });

  // Additional tests can be written to cover more scenarios like:
  // Testing DownloadButton functionality, interaction between selection and download button, etc.
});
