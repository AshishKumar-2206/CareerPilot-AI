import React, { useState } from "react";

export default function ProfileCard() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div style={styles.card}>
      <div style={styles.imgBox}>
        <img
          src={
            image ||
            "https://api.dicebear.com/7.x/adventurer/svg?seed=AIUser"
          }
          alt="profile"
          style={styles.img}
        />

        <input type="file" onChange={handleUpload} style={styles.file} />
        <div style={styles.plus}>➕</div>
      </div>

      <div style={styles.name}>AI Generated User</div>
      <div style={styles.bio}>
        “Building my career with AI-powered opportunities 🚀”
      </div>
    </div>
  );
}

const styles = {
  card: {
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "12px",
    textAlign: "center",
  },
  imgBox: {
    position: "relative",
  },
  img: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
  },
  file: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 0,
  },
  plus: {
    position: "absolute",
    bottom: "0",
    right: "35%",
    background: "#007bff",
    color: "white",
    borderRadius: "50%",
    padding: "5px",
    cursor: "pointer",
  },
  name: {
    marginTop: "10px",
    fontWeight: "bold",
  },
  bio: {
    fontSize: "13px",
    opacity: 0.7,
  },
};