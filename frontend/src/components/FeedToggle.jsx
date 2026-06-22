import React, { useState } from "react";

export default function FeedToggle() {
  const [mode, setMode] = useState("career");

  return (
    <button
      onClick={() =>
        setMode(mode === "career" ? "jobs" : "career")
      }
      style={styles.btn}
    >
      {mode === "career" ? "Career Mode" : "Jobs Mode"}
    </button>
  );
}

const styles = {
  btn: {
    padding: "8px 12px",
    margin: "10px",
    background: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
};