import React from "react";

export default function SearchBar() {
  return (
    <div style={styles.wrapper}>
      <input
        type="text"
        placeholder="Search skills, jobs, requirements..."
        style={styles.input}
      />
      <button style={styles.btn}>Search</button>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "10px",
    padding: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  btn: {
    padding: "10px 15px",
    background: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};