const TopBar = () => {
  return (
    <div style={topBarStyle}>
      <div style={leftContentStyle}>
        <img
          src="https://avatars.githubusercontent.com/u/43347517?s=200&v=4"
          alt="Logo"
          style={logoStyle}
        />
      </div>
      <div style={rightContentStyle}>
        <h1 style={headingStyle}>
          Welcome to Satellite Data Augmentation project
        </h1>
      </div>
    </div>
  );
};

export default TopBar;

const topBarStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#3b7efc",
  padding: "10px 20px",
  fontFamily: "monospace",
};

const leftContentStyle = {
  marginLeft: "60px",
};

const logoStyle = {
  width: "100px",
  height: "100px",
  borderRadius: "50%",
};

const rightContentStyle = {
  marginLeft: "60px",
};

const headingStyle = {
  fontSize: "30px",
  animation: "animateText 2s infinite alternate",
  margin: "0",
};

const animateTextKeyframes = {
  "0%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(1.1)",
  },
};

// Adding animation keyframes directly to the document style
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes animateText {
    ${Object.entries(animateTextKeyframes)
      .map(
        ([key, value]) =>
          `${key} { ${Object.entries(value)
            .map(([k, v]) => `${k}: ${v};`)
            .join(" ")} }`,
      )
      .join(" ")}
  }
`);
