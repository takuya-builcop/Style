import React, { useState } from "react";

export const InlineStyle = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const containerStyle = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: isHovering ? "#aaa" : "#ccc",
    border: "none",
    borderRadius: "8px",
    padding: "8px 8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Style -</p>
      <button
        style={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        FIGHT!!
      </button>
    </div>
  );
};
