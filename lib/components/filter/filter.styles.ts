import { twMerge } from "tailwind-merge";

export const filterContainer = twMerge(
  `flex flex-col items-center justify-center`,
  `p-4 bg-gray-200 rounded-lg shadow-md`,
);

export const label = twMerge(`text-lg font-semibold mb-2`, `text-gray-800`);

export const input = twMerge(
  `w-full px-4 py-2 rounded-md border`,
  `border-gray-400 focus:outline-none focus:border-blue-500`,
);

export const button = twMerge(
  `mt-4 px-6 py-2 bg-blue-500 text-white rounded-md`,
  `hover:bg-blue-600`,
);
