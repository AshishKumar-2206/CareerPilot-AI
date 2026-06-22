import React from "react";

export default function RightSidebar() {
  return (
    <div style={styles.box}>
      <h4>Followers</h4>
      <p>👤 Rahul</p>
      <p>👤 Anjali</p>

      <h4>Suggestions</h4>
      <p>💡 Learn AWS</p>
      <p>💡 Build Portfolio</p>
    </div>
  );
}

const styles = {
  box: {
    padding: "15px",
    borderLeft: "1px solid #ddd",
  },
};