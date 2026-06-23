import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaEye,
  FaFileAlt,
  FaUserGraduate,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

export default function LeftSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* PROFILE CARD */}
      <div
        className="card border-0 shadow-sm mb-3"
        style={{
          background: "#1e293b",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <div className="card-body text-center">

          <img
            src="https://api.dicebear.com/7.x/adventurer/svg?seed=Ashish"
            alt="profile"
            className="rounded-circle border border-4 border-primary"
            width="120"
            height="120"
          />


          <h4 className="mt-3 mb-1">Ashish Kumar</h4>

          <p className="text-secondary mb-3">
            Full Stack Developer
          </p>

          <button className="btn btn-primary rounded-pill px-4">
            Edit Profile
          </button>
          <div className="sidebar-link">
            🏠 Dashboard
          </div>

          <div className="sidebar-link">
            💼 Jobs
          </div>

          <div className="sidebar-link">
            👤 Profile
          </div>

          <div className="sidebar-link">
            🤖 AI Center
          </div>

          <div className="sidebar-link">
            📊 Analytics
          </div>

        </div>
      </div>

      {/* CAREER SCORE */}
      <div
        className="card border-0 shadow-sm mb-3"
        style={{
          background: "#1e293b",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <div className="card-body text-center">

          <h5 className="mb-3">
            <FaChartLine className="me-2" />
            Career Score
          </h5>

          <div
            className="mx-auto mb-3"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              border: "10px solid #3b82f6",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            87%
          </div>

          <p className="text-secondary">
            Your profile is stronger than 87% of candidates.
          </p>

        </div>
      </div>

      {/* RESUME PROGRESS */}
      <div
        className="card border-0 shadow-sm mb-3"
        style={{
          background: "#1e293b",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <div className="card-body">

          <h5>
            <FaFileAlt className="me-2" />
            Resume Completion
          </h5>

          <div className="progress mt-3">
            <div
              className="progress-bar bg-success"
              style={{ width: "78%" }}
            >
              78%
            </div>
          </div>

          <small className="text-secondary">
            Add certifications and projects to improve.
          </small>

        </div>
      </div>

      {/* STATISTICS */}
      <div
        className="card border-0 shadow-sm mb-3"
        style={{
          background: "#1e293b",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <div className="card-body">

          <h5 className="mb-4">
            <FaAward className="me-2" />
            Statistics
          </h5>

          <div className="d-flex justify-content-between mb-3">
            <span>
              <FaBriefcase className="me-2 text-primary" />
              Applications
            </span>
            <strong>24</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>
              <FaUserGraduate className="me-2 text-success" />
              Interviews
            </span>
            <strong>4</strong>
          </div>

          <div className="d-flex justify-content-between">
            <span>
              <FaEye className="me-2 text-warning" />
              Profile Views
            </span>
            <strong>521</strong>
          </div>

        </div>
      </div>

      {/* SKILLS */}
      <div
        className="card border-0 shadow-sm"
        style={{
          background: "#1e293b",
          color: "white",
          borderRadius: "20px",
        }}
      >
        <div className="card-body">

          <h5 className="mb-3">
            Top Skills
          </h5>

          <div className="d-flex flex-wrap gap-2">

            <span className="badge bg-primary p-2">
              React
            </span>

            <span className="badge bg-success p-2">
              Spring Boot
            </span>

            <span className="badge bg-warning text-dark p-2">
              Java
            </span>

            <span className="badge bg-info p-2">
              MySQL
            </span>

            <span className="badge bg-danger p-2">
              Docker
            </span>

          </div>

        </div>
      </div>
    </motion.div>
  );
}