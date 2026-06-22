import React from "react";

export default function Logo() {
  return (
    <div style={styles.logoBox}>
      <div style={styles.primary}>CareerPilot AI</div>
      <div style={styles.icon}>🚀</div>
      <div style={styles.watermark}>AI Career Platform</div>
    </div>
  );
}

const styles = {
  logoBox: {
    padding: "15px",
  },
  primary: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  icon: {
    fontSize: "28px",
  },
  watermark: {
    fontSize: "12px",
    opacity: 0.6,
  },
};