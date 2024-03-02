import { twMerge } from "tailwind-merge";

export const primary = twMerge(
  `px-6 py-2 bg-blue-500 text-white rounded-md`,
  `hover:bg-blue-600`,
);

export const secondary = twMerge(
  `px-6 py-2 bg-gray-500 text-white rounded-md`,
  `hover:bg-gray-600`,
);
