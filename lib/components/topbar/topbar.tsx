import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-content">
        <img
          src="https://avatars.githubusercontent.com/u/43347517?s=200&v=4"
          alt="Logo"
        />
      </div>
      <div className="right-content">
        <h1>Welcome to Satellite Data Augmentation project</h1>
      </div>
    </div>
  );
};

export default TopBar;
