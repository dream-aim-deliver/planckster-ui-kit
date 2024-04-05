import { render, screen } from "@testing-library/react";
import { SourcePage } from "@/components/sourcepage";

describe("SourcePage", () => {
  const sampleSources = [
    { name: "Source 1" },
    { name: "Source 2" },
    { name: "Source 3" },
  ];

  test("renders SourceList with sources", () => {
    render(<SourcePage sources={sampleSources} />);

    // Check if the SourceList component is rendered
    const sourceListElement = screen.getByText("SOURCES");
    expect(sourceListElement).toBeInTheDocument();

    // Check if the source names are rendered
    sampleSources.forEach((source) => {
      const sourceNameElement = screen.getByText(source.name);
      expect(sourceNameElement).toBeInTheDocument();
    });
  });

  test("renders UploadButton and DownloadButton", () => {
    render(<SourcePage sources={sampleSources} />);

    // Check if the UploadButton component is rendered
    const uploadButtonElement = screen.getByLabelText("");
    expect(uploadButtonElement).toBeInTheDocument();

    // Check if the DownloadButton component is rendered
    const downloadButtonElement = screen.getByRole("button");
    expect(downloadButtonElement).toBeInTheDocument();
  });

  test("renders empty SourceList when no sources provided", () => {
    render(<SourcePage sources={[]} />);

    // Check if the SourceList component is rendered without any source names
    const sourceListElement = screen.getByText("SOURCES");
    expect(sourceListElement).toBeInTheDocument();

    const sourceNameElements = screen.queryAllByText(/Source/i);
    expect(sourceNameElements).toHaveLength(1);
  });
});
