import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottomnav glass">

      <Link to="/">🏠</Link>
      <Link to="/profile">👤</Link>
      <Link to="/messages">💬</Link>
      <Link to="/notifications">🔔</Link>
      <Link to="/settings">⚙</Link>

    </div>
  );
}