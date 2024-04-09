import React from "react";
import { SourceList } from "@/components/sourcelist";
import { UploadButton } from "@/components/uploadbutton";
import { DownloadButton } from "@/components/downloadbutton";

interface SourceData {
  name: string;
  protocol: string;
  lfn: string;
  dateCreated: string;
}

interface SourcePageProps {
  sources: SourceData[];
  title: string;
  showUploadButton: boolean;
}

const SourcePage: React.FC<SourcePageProps> = ({
  sources,
  title,
  showUploadButton,
}) => {
  return (
    <div className="container mx-auto py-8 relative">
      <div className="absolute top-10 right-5 z-10">
        <DownloadButton />
      </div>
      <div className="relative">
        <SourceList sources={sources} title={title} />
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
