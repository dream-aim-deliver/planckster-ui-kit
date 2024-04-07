const content = [
  "./index.html",
  "./lib/**/*.{js,ts,jsx,tsx}",
  "./app/**/*.{js,ts,jsx,tsx}",
];

const theme = {
  extend: {
    colors: {
      primary: "#FFA500", // Orange
      secondary: "#4CAF50", // Green
      tertiary: "#3498db", // Blue
      neutral: "#808080", // Gray
    },
  },
};

const plugins: never[] = [];

export {
  content as defaultContent,
  theme as defaultTheme,
  plugins as defaultPlugins,
};
