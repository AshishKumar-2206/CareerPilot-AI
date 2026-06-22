import React from "react";

export default function Feed() {
  const posts = [
    "🔥 AI Jobs: Machine Learning Engineer hiring now",
    "💼 Top Skills: React, Java, Spring Boot",
    "🚀 Career Tip: Build 3 real projects",
  ];

  return (
    <div>
      {posts.map((p, i) => (
        <div key={i} style={styles.post}>
          {p}
        </div>
      ))}
    </div>
  );
}

const styles = {
  post: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #eee",
    borderRadius: "8px",
  },
};