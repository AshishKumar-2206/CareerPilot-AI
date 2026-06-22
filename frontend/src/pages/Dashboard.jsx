import { useState } from "react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import LeftSidebar from "../components/LeftSidebar";
import AIChatbot from "../components/AIChatbot";

import {
  FaMoon,
  FaSun,
  FaBriefcase,
  FaFileAlt,
  FaChartLine,
  FaUserGraduate,
} from "react-icons/fa";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={
        darkMode
          ? "bg-dark text-light min-vh-100"
          : "bg-light text-dark min-vh-100"
      }
    >
      <Navbar />

      <div className="container-fluid py-4">
        <div className="row">

          {/* LEFT SIDEBAR */}
          <div className="col-lg-3 mb-4">
            <LeftSidebar />
          </div>

          {/* CENTER CONTENT */}
          <div className="col-lg-6">

            {/* TOP ACTION BAR */}
            <div className="d-flex justify-content-between align-items-center mb-4">

              <h3 className="fw-bold">
                ConnectSphere AI Dashboard
              </h3>

              <button
                className={`btn ${
                  darkMode ? "btn-light" : "btn-dark"
                }`}
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

            </div>

            {/* HERO SECTION */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="card border-0 shadow-lg mb-4"
              style={{
                background:
                  "linear-gradient(135deg,#2563eb,#7c3aed)",
                borderRadius: "25px",
                color: "white",
              }}
            >
              <div className="card-body p-4">

                <div className="row align-items-center">

                  <div className="col-md-8">

                    <h2 className="fw-bold">
                      Welcome Back, Ashish 👋
                    </h2>

                    <p className="mb-4">
                      Accelerate your career journey with
                      AI-powered job recommendations,
                      resume insights, and personalized
                      learning paths.
                    </p>

                    <button className="btn btn-light btn-lg me-2">
                      Find Good Jobs For You
                    </button>

                    <button className="btn btn-outline-light btn-lg">
                      Analyze My Skills
                    </button>

                  </div>

                  <div className="col-md-4 text-center">

                    <div
                      style={{
                        width: "140px",
                        height: "140px",
                        borderRadius: "50%",
                        border: "12px solid white",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "32px",
                        fontWeight: "bold",
                      }}
                    >
                      87%
                    </div>

                    <h5 className="mt-3">
                      Career Readiness
                    </h5>

                  </div>

                </div>

              </div>
            </motion.div>

            {/* ANALYTICS CARDS */}
            <div className="row mb-4">

              <div className="col-md-3 mb-3">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body">
                    <FaBriefcase
                      size={30}
                      className="text-primary mb-2"
                    />
                    <h4>24</h4>
                    <small>Applications</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body">
                    <FaChartLine
                      size={30}
                      className="text-success mb-2"
                    />
                    <h4>86</h4>
                    <small>Job Matches</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body">
                    <FaUserGraduate
                      size={30}
                      className="text-warning mb-2"
                    />
                    <h4>14</h4>
                    <small>Skills Learned</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-3">
                <div className="card border-0 shadow-sm text-center h-100">
                  <div className="card-body">
                    <FaFileAlt
                      size={30}
                      className="text-danger mb-2"
                    />
                    <h4>92%</h4>
                    <small>Resume Score</small>
                  </div>
                </div>
              </div>

            </div>
                        {/* AI INSIGHTS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-3">
                  🤖 AI Career Insights
                </h4>

                <div className="alert alert-primary">
                  You are <strong>78% ready</strong> for Software Engineer roles.
                </div>

                <div className="alert alert-success">
                  Top Strength: React + Spring Boot
                </div>

                <div className="alert alert-warning">
                  Missing Skill: Docker & AWS
                </div>

                <div className="alert alert-info mb-0">
                  Expected Salary Range: ₹8–12 LPA
                </div>

              </div>
            </div>

            {/* RECOMMENDED JOBS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="fw-bold">
                    💼 Recommended Jobs
                  </h4>

                  <button className="btn btn-primary">
                    View All Jobs
                  </button>
                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card border shadow-sm"
                    >
                      <div className="card-body">

                        <h5>Frontend Developer</h5>

                        <p className="text-muted">
                          Google
                        </p>

                        <h6 className="text-success">
                          ₹12 LPA
                        </h6>

                        <span className="badge bg-success mb-3">
                          94% Match
                        </span>

                        <br />

                        <button className="btn btn-primary w-100">
                          Apply Now
                        </button>

                      </div>
                    </motion.div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card border shadow-sm"
                    >
                      <div className="card-body">

                        <h5>AI Engineer</h5>

                        <p className="text-muted">
                          Microsoft
                        </p>

                        <h6 className="text-success">
                          ₹18 LPA
                        </h6>

                        <span className="badge bg-primary mb-3">
                          91% Match
                        </span>

                        <br />

                        <button className="btn btn-primary w-100">
                          Apply Now
                        </button>

                      </div>
                    </motion.div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card border shadow-sm"
                    >
                      <div className="card-body">

                        <h5>Java Developer</h5>

                        <p className="text-muted">
                          Infosys
                        </p>

                        <h6 className="text-success">
                          ₹9 LPA
                        </h6>

                        <span className="badge bg-warning text-dark mb-3">
                          89% Match
                        </span>

                        <br />

                        <button className="btn btn-primary w-100">
                          Apply Now
                        </button>

                      </div>
                    </motion.div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="card border shadow-sm"
                    >
                      <div className="card-body">

                        <h5>Backend Engineer</h5>

                        <p className="text-muted">
                          Amazon
                        </p>

                        <h6 className="text-success">
                          ₹15 LPA
                        </h6>

                        <span className="badge bg-info mb-3">
                          88% Match
                        </span>

                        <br />

                        <button className="btn btn-primary w-100">
                          Apply Now
                        </button>

                      </div>
                    </motion.div>
                  </div>

                </div>

              </div>
            </div>

            {/* SKILL GAP ANALYSIS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-4">
                  🎯 Skill Gap Analysis
                </h4>

                <h6>Current Skills</h6>

                <div className="mb-3">
                  <span className="badge bg-primary me-2">
                    React
                  </span>

                  <span className="badge bg-success me-2">
                    Spring Boot
                  </span>

                  <span className="badge bg-warning text-dark me-2">
                    Java
                  </span>

                  <span className="badge bg-info">
                    MySQL
                  </span>
                </div>

                <h6>Recommended Skills</h6>

                <div className="mb-3">
                  <span className="badge bg-danger me-2">
                    Docker
                  </span>

                  <span className="badge bg-secondary me-2">
                    AWS
                  </span>

                  <span className="badge bg-dark">
                    Microservices
                  </span>
                </div>

                <label className="fw-bold">
                  Overall Skill Progress
                </label>

                <div className="progress mt-2">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "75%" }}
                  >
                    75%
                  </div>
                </div>

              </div>
            </div>

            {/* LEARNING RECOMMENDATIONS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-4">
                  📚 Learning Recommendations
                </h4>

                <div className="list-group">

                  <div className="list-group-item">
                    Docker Fundamentals
                  </div>

                  <div className="list-group-item">
                    AWS Cloud Practitioner
                  </div>

                  <div className="list-group-item">
                    System Design Basics
                  </div>

                  <div className="list-group-item">
                    Kubernetes for Beginners
                  </div>

                </div>

              </div>
            </div>
                        {/* CAREER ROADMAP */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-4">
                  🛣 Career Roadmap
                </h4>

                <ul className="list-group">

                  <li className="list-group-item">
                    ✅ HTML & CSS
                  </li>

                  <li className="list-group-item">
                    ✅ JavaScript
                  </li>

                  <li className="list-group-item">
                    ✅ React
                  </li>

                  <li className="list-group-item">
                    ✅ Spring Boot
                  </li>

                  <li className="list-group-item">
                    ⬜ Docker
                  </li>

                  <li className="list-group-item">
                    ⬜ AWS
                  </li>

                  <li className="list-group-item">
                    ⬜ Microservices
                  </li>

                  <li className="list-group-item">
                    ⬜ System Design
                  </li>

                </ul>

              </div>
            </div>

            {/* RESUME STRENGTH */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-3">
                  📄 Resume Strength
                </h4>

                <div className="progress mb-3">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "92%" }}
                  >
                    92%
                  </div>
                </div>

                <ul>
                  <li>Add more project screenshots</li>
                  <li>Include achievements section</li>
                  <li>Add certifications</li>
                </ul>

              </div>
            </div>

            {/* ACTIVITY FEED */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h4 className="fw-bold mb-4">
                  🌟 Professional Activity Feed
                </h4>

                <div className="border rounded p-3 mb-3">
                  <h6 className="fw-bold">
                    Rahul Sharma
                  </h6>

                  <p className="mb-2">
                    Started a new Software Engineer role at Google 🚀
                  </p>

                  <button className="btn btn-light btn-sm me-2">
                    👍 Like
                  </button>

                  <button className="btn btn-light btn-sm me-2">
                    💬 Comment
                  </button>

                  <button className="btn btn-light btn-sm">
                    ↗ Share
                  </button>
                </div>

                <div className="border rounded p-3">
                  <h6 className="fw-bold">
                    Priya Das
                  </h6>

                  <p className="mb-2">
                    Completed AWS Cloud Practitioner Certification 🎉
                  </p>

                  <button className="btn btn-light btn-sm me-2">
                    👍 Like
                  </button>

                  <button className="btn btn-light btn-sm me-2">
                    💬 Comment
                  </button>

                  <button className="btn btn-light btn-sm">
                    ↗ Share
                  </button>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-lg-3">

            {/* AI COACH */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h5 className="fw-bold">
                  🤖 ConnectSphere AI Coach
                </h5>

                <p>
                  Complete Docker Fundamentals to increase
                  your job matching score by 12%.
                </p>

                <button className="btn btn-primary w-100">
                  Start Learning
                </button>

              </div>
            </div>

            {/* INTERVIEW PREP */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h5 className="fw-bold">
                  🎤 Interview Preparation
                </h5>

                <p className="mb-1">
                  Frontend Developer
                </p>

                <small className="text-muted">
                  Tomorrow • 10:30 AM
                </small>

                <button className="btn btn-success w-100 mt-3">
                  Prepare With AI
                </button>

              </div>
            </div>

            {/* TRENDING SKILLS */}
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">

                <h5 className="fw-bold">
                  🔥 Trending Skills
                </h5>

                <div className="d-flex flex-wrap gap-2">

                  <span className="badge bg-primary">
                    React
                  </span>

                  <span className="badge bg-success">
                    Spring Boot
                  </span>

                  <span className="badge bg-danger">
                    Docker
                  </span>

                  <span className="badge bg-warning text-dark">
                    AWS
                  </span>

                  <span className="badge bg-info">
                    AI/ML
                  </span>

                </div>

              </div>
            </div>

            {/* QUICK ACTIONS */}
            <div className="card border-0 shadow-sm">
              <div className="card-body">

                <h5 className="fw-bold mb-3">
                  ⚡ Quick Actions
                </h5>

                <button className="btn btn-primary w-100 mb-2">
                  Upload Resume
                </button>

                <button className="btn btn-success w-100 mb-2">
                  Find Jobs
                </button>

                <button className="btn btn-warning w-100 mb-2">
                  Skill Analysis
                </button>

                <button className="btn btn-dark w-100">
                  Ask AI Coach
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>

      <AIChatbot />
    </motion.div>
  );
}