import { twMerge } from "tailwind-merge";

export const searchBarContainer = twMerge(
  `flex items-center justify-center`,
  `p-4 bg-gray-200 rounded-lg shadow-md`,
);

export const input = twMerge(
  `w-full px-4 py-2 rounded-md border`,
  `border-gray-400 focus:outline-none focus:border-blue-500`,
);

export const button = twMerge(
  `ml-2 px-6 py-2 bg-blue-500 text-white rounded-md`,
  `hover:bg-blue-600`,
);
