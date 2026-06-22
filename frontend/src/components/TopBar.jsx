export default function TopBar({ dark, setDark }) {
  return (
    <div className="topbar glass d-flex justify-content-between align-items-center p-2">

      <h5>CareerPilot AI 🚀</h5>

      <div className="d-flex gap-2">

        <button className="btn btn-outline-secondary btn-sm">
          🔔
        </button>

        <button
          className="btn btn-sm btn-dark"
          onClick={() => setDark(!dark)}
        >
          {dark ? "☀" : "🌙"}
        </button>

      </div>

    </div>
  );
}