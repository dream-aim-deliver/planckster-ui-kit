import React from "react";

export interface ResearchCardProps {
  title: string;
  id: number;
  description: string;
  onSourcesClick: () => void;
  onConversationsClick: () => void;
}

export const ResearchCard: React.FC<ResearchCardProps> = ({
  title,
  id,
  description,
  onSourcesClick,
  onConversationsClick,
}) => {
  return (
    <div
      className="block max-w-lg p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      data-testid={`card-${id}`}
    >
      <h5
        className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white overflow-hidden overflow-ellipsis"
        style={{ wordWrap: "break-word" }}
      >
        {title}
      </h5>
      <p
        className="font-normal text-xs text-gray-700 dark:text-gray-400 overflow-hidden overflow-ellipsis"
        style={{ wordWrap: "break-word" }}
      >
        {description}
      </p>
      <div className="mt-4 flex justify-end">
        <button
          onClick={onSourcesClick}
          className="mr-2 px-3 py-2 rounded-md text-blue-500 hover:text-violet-600 hover:border-violet-600 border border-blue-500 focus:outline-none dark:text-white dark:hover:text-violet-400 dark:hover:border-violet-400 dark:border-white"
        >
          Sources
        </button>
        <button
          onClick={onConversationsClick}
          className="px-3 py-2 rounded-md text-blue-500 hover:text-violet-600 hover:border-violet-600 border border-blue-500 focus:outline-none dark:text-white dark:hover:text-violet-400 dark:hover:border-violet-400 dark:border-white"
        >
          Conversations
        </button>
      </div>
    </div>
  );
};

export default ResearchCard;
