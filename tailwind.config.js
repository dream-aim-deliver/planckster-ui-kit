/** @type {import('tailwindcss').Config} */
import {
  defaultContent,
  defaultTheme,
  defaultPlugins,
} from "./lib/tailwind/config";
export default {
  content: [...defaultContent],
  theme: {
    ...defaultTheme,
  },
  plugins: [...defaultPlugins],
};
