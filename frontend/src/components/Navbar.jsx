import { Link } from "react-router-dom";
import {
  FaHome,
  FaBriefcase,
  FaUserFriends,
  FaBell,
  FaComments,
  FaUserCircle,
  FaSearch,
  FaRobot,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
        className="navbar navbar-expand-lg shadow-sm sticky-top"
      style={{
        background: "#0f172a",
        borderBottom: "1px solid #1e293b",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid px-4">

        {/* LOGO */}
        <Link
          className="navbar-brand fw-bold text-white fs-4"
          to="/dashboard"
        >
          🚀 CareerPilot AI
        </Link>
        

        {/* SEARCH */}
        <div
          className="d-flex align-items-center px-3 py-2 rounded-pill mx-4"
          style={{
            background: "#1e293b",
            width: "350px",
          }}
        >
          <FaSearch color="#94a3b8" />
          <input
            type="text"
            placeholder="Search jobs, skills, companies..."
            className="form-control bg-transparent border-0 text-white ms-2"
            style={{ boxShadow: "none" }}
          />
        </div>

        {/* NAVIGATION */}
        <div className="d-flex align-items-center gap-4">

          <Link
            to="/dashboard"
            className="text-decoration-none text-light text-center"
          >
            <FaHome size={20} />
            <div style={{ fontSize: "12px" }}>Home</div>
          </Link>

          <Link
            to="/jobs"
            className="text-decoration-none text-light text-center"
          >
            <FaBriefcase size={20} />
            <div style={{ fontSize: "12px" }}>Jobs</div>
          </Link>


          <Link
            to="/connections"
            className="text-decoration-none text-light text-center"
          >
            <FaUserFriends size={20} />
            <div style={{ fontSize: "12px" }}>Network</div>
          </Link>

          <Link
            to="/messages"
            className="text-decoration-none text-light text-center"
          >
            <FaComments size={20} />
            <div style={{ fontSize: "12px" }}>Messages</div>
          </Link>

          <Link
            to="/notifications"
            className="text-decoration-none text-light text-center position-relative"
          >
            <FaBell size={20} />
            <span
              className="position-absolute badge rounded-pill bg-danger"
              style={{
                top: "-5px",
                right: "-8px",
                fontSize: "10px",
              }}
            >
              3
            </span>
            <div style={{ fontSize: "12px" }}>Alerts</div>
          </Link>


            <Link
                className="nav-link text-white"
                to="/company"
            >
                🏢 Companies
            </Link>

          <Link
            to="/profile"
            className="text-decoration-none text-light text-center"
          >
            <FaUserCircle size={25} />
            <div style={{ fontSize: "12px" }}>Profile</div>
          </Link>
            <button className="btn btn-primary rounded-pill">
                <FaRobot className="me-2" />
                AI Coach
            </button>
            <Link
                className="nav-link text-white"
                to="/career-roadmap"
            >
                🎯 Roadmap
            </Link>
            <Link
                className="nav-link text-white"
                to="/ai-career-center"
            >
                🤖 AI Career
            </Link>
            <Link
                className="nav-link text-white"
                to="/learning"
            >
                🎓 Learning
            </Link>
            <Link
                className="nav-link text-white"
                to="/resume-builder"
            >
                📄 Resume
            </Link>
            <Link
                className="nav-link text-white"
                to="/mock-interview"
            >
                🤖 Interview
            </Link>
            <Link
                className="nav-link text-white"
                to="/analytics"
            >
                📊 Analytics
            </Link>

            <Link className="nav-link text-white" to="/settings">
                ⚙️ Settings
            </Link>

          <button className="btn btn-danger rounded-pill">
            Logout
          </button>


        </div>
      </div>
    </nav>
  );
}