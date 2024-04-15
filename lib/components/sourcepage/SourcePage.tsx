import React, { useState } from "react";
import { SourceList } from "@/components/sourcelist";
import { UploadButton } from "@/components/uploadbutton";
import { DownloadButton } from "@/components/downloadbutton";

interface SourceData {
  id: string;
  name: string;
  protocol: string;
  lfn: string;
  dateCreated: string;
}

interface SourcePageProps {
  sources: SourceData[];
  title: string;
  showUploadButton: boolean;
  enableSelection?: boolean;
}

const SourcePage: React.FC<SourcePageProps> = ({
  sources,
  title,
  showUploadButton = true,
  enableSelection = true,
}) => {
  // Track selected IDs
  const [selectedIds, setSelectedIds] = useState<Record<string, boolean>>({});

  return (
    <div className="container mx-auto py-8 relative">
      <div className="absolute top-10 right-5 z-10">
        {/* Pass sources and selectedIds to DownloadButton */}
        <DownloadButton sources={sources} selectedIds={selectedIds} />
      </div>
      <div className="relative">
        {/* Pass setSelectedIds to SourceList to update selectedIds from there */}
        <SourceList
          sources={sources}
          title={title}
          enableSelection={enableSelection}
          onSelectionChange={setSelectedIds}
        />
        {showUploadButton && (
          <div className="fixed bottom-0 right-0 mb-4 mr-4 z-10 reflect">
            <UploadButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default SourcePage;
