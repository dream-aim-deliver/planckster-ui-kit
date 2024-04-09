import { render, screen } from "@testing-library/react";
import { SourcePage } from "@/components/sourcepage";

describe("SourcePage", () => {
  const sampleSources = [
    {
      name: "Source 1",
      protocol: "ftp",
      lfn: "/path/to/source1",
      dateCreated: "2023-04-01",
    },
    {
      name: "Source 2",
      protocol: "http",
      lfn: "/path/to/source2",
      dateCreated: "2023-04-05",
    },
  ];

  test("renders SourceList with sources", () => {
    render(
      <SourcePage
        sources={sampleSources}
        title="My Sources"
        showUploadButton={false}
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
  });

  test("renders UploadButton and DownloadButton", () => {
    render(
      <SourcePage
        sources={sampleSources}
        title="My Sources"
        showUploadButton={true}
      />,
    );

    // Check if the UploadButton component is rendered
    const uploadButtonElement = screen.getByLabelText("");
    expect(uploadButtonElement).toBeInTheDocument();

    // Check if the DownloadButton component is rendered
    const downloadButtonElement = screen.getByRole("button", {
      name: /download/i,
    });
    expect(downloadButtonElement).toBeInTheDocument();
  });

  test("renders empty SourceList when no sources provided", () => {
    render(
      <SourcePage sources={[]} title="No Sources" showUploadButton={false} />,
    );

    // Check if the SourceList component is rendered without any source names
    const sourceListElement = screen.getByText("No Sources");
    expect(sourceListElement).toBeInTheDocument();
    const sourceNameElements = screen.queryAllByText(/Source/i);
    expect(sourceNameElements).toHaveLength(1);
  });
});
