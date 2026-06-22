import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar glass ${open ? "open" : "close"}`}>

      <button onClick={() => setOpen(!open)}>☰</button>

      <Link to="/">🏠 Feed</Link>
      <Link to="/profile">👤 Profile</Link>
      <Link to="/messages">💬 Messages</Link>
      <Link to="/notifications">🔔 Alerts</Link>
      <Link to="/settings">⚙ Settings</Link>

    </div>
  );
}