import React, { useState, useEffect } from "react";

function Header() {
  const mediaMatch = window.matchMedia("screen and (min-width: 350px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5rem",
  };

  const headingStyle = {
    container: (isFontSize) => ({
      fontSize: isFontSize ? "2rem" : "4rem",
      fontWeight: "600",
      marginBottom: "3rem",
      lineHeight: "1rem",
      color: "#900C3F",
      textTransform: "lowercase",
      textAlign: "center",
    }),
  };

  return (
    <header className="header" style={headerStyle}>
      <h1 style={headingStyle.container(matches)}>Book Finder</h1>
    </header>
  );
}

export default Header;
