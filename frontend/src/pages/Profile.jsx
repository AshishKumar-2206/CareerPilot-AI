import { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/profile.css";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Navbar />

      <div
        className={
          darkMode
            ? "bg-dark text-light min-vh-100"
            : "bg-light text-dark min-vh-100"
        }
      >
        <div className="container pt-4">

          <div className="d-flex justify-content-end mb-3">
            <button
              className={darkMode ? "btn btn-light" : "btn btn-dark"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* COVER BANNER */}
          <div
            className="rounded-4 shadow-lg position-relative"
            style={{
              height: "260px",
              background:
                "linear-gradient(135deg,#2563eb,#4f46e5,#7c3aed)"
            }}
          >
            <div
              className="position-absolute bottom-0 start-50 translate-middle-x"
              style={{ marginBottom: "-75px" }}
            >
              <img
                src={
                  profileImage ||
                  "https://api.dicebear.com/7.x/adventurer/svg?seed=Ashish"
                }
                alt="profile"
                className="rounded-circle border border-5 border-white shadow"
                width="150"
                height="150"
              />
            </div>
          </div>

          {/* PROFILE HEADER */}
          <div className="text-center mt-5 pt-4">

            <label className="btn btn-primary btn-sm mb-3">
              Upload Photo
              <input
                type="file"
                hidden
                onChange={handleImageUpload}
              />
            </label>

            <h2 className="fw-bold">
              Ashish Kumar
            </h2>

            <h5 className="text-muted">
              Full Stack Developer
            </h5>

            <p className="text-secondary">
              ConnectSphere AI Founder • React • Spring Boot • AI Enthusiast
            </p>

            <div className="d-flex justify-content-center gap-2 flex-wrap">

              <button className="btn btn-primary">
                Connect
              </button>

              <button className="btn btn-outline-primary">
                Message
              </button>

              <button className="btn btn-outline-dark">
                Edit Profile
              </button>

            </div>
          </div>

          <div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <div className="d-flex justify-content-between">
      <h5>Profile Completion</h5>
      <strong>88%</strong>
    </div>

    <div className="progress mt-3" style={{ height: "12px" }}>
      <div
        className="progress-bar"
        style={{
          width: "88%",
          background:
            "linear-gradient(90deg,#2563eb,#7c3aed)"
        }}
      />
    </div>

  </div>
</div>

          {/* SCORES */}
          <div className="row mt-5">

            <div className="col-md-6 mb-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <h5>Career Score</h5>
                  <h1 className="text-primary fw-bold">
                    87%
                  </h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card border-0 shadow-lg">
                <div className="card-body text-center">
                  <h5>Resume Score</h5>
                  <h1 className="text-success fw-bold">
                    92%
                  </h1>
                </div>
              </div>
            </div>

            <span
  className="badge fs-6 p-2"
  style={{
    background:
      "linear-gradient(135deg,#2563eb,#7c3aed)"
  }}
>
  ⭐ Top Career Candidate
</span>

          </div>

          {/* ABOUT */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">
              <h3 className="fw-bold mb-3">
                About Me
              </h3>

              <p>
                Passionate Full Stack Developer focused on
                React, Spring Boot, MySQL and Artificial Intelligence.
                Currently building ConnectSphere AI, an AI-powered
                career networking platform helping students find
                jobs, improve skills, and prepare for interviews.
              </p>
            </div>
          </div>

          <div className="card shadow-lg mt-4">

<h3>👨‍💼 Recruiter View</h3>

<p>
Available for:
</p>

<span className="badge bg-success">
Open To Work
</span>

<p className="mt-3">
Preferred Salary:
₹8–12 LPA
</p>

<p>
Location:
Bangalore
</p>

</div>

          {/* SKILLS */}
          <div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-4">
      Skills Progress
    </h3>

    <p>React</p>
    <div className="progress mb-3">
      <div className="progress-bar bg-primary" style={{width:"95%"}}>
        95%
      </div>
    </div>

    <p>Spring Boot</p>
    <div className="progress mb-3">
      <div className="progress-bar bg-success" style={{width:"90%"}}>
        90%
      </div>
    </div>

    <p>Java</p>
    <div className="progress mb-3">
      <div className="progress-bar bg-warning" style={{width:"88%"}}>
        88%
      </div>
    </div>

    <p>MySQL</p>
    <div className="progress">
      <div className="progress-bar bg-info" style={{width:"85%"}}>
        85%
      </div>
    </div>

  </div>
</div>

          {/* EDUCATION */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">

              <h3 className="fw-bold mb-3">
                Education
              </h3>

              <h5>
                B.Tech Computer Science Engineering
              </h5>

              <p className="text-muted">
                Your College Name
              </p>

              <small>
                2022 - 2026
              </small>

            </div>
          </div>

          {/* PROJECTS */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">

              <h3 className="fw-bold mb-3">
                Projects
              </h3>

              <div className="mb-3">
                <h5>ConnectSphere AI</h5>

                <p>
                  AI-powered career networking platform with
                  AI assistant, job recommendations,
                  career roadmap, and skill analysis.
                </p>
              </div>

              <hr />

              <div>
                <h5>CareerPilot AI</h5>

                <p>
                  Smart career guidance platform built using
                  React, Spring Boot and MySQL.
                </p>
              </div>

            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">

              <h3 className="fw-bold mb-3">
                Experience
              </h3>

              <div>
                <h5>
                  Full Stack Development Training
                </h5>

                <p className="text-muted">
                  React • Spring Boot • MySQL
                </p>
              </div>

            </div>
          </div>

          <div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-4">
      Experience Timeline
    </h3>

    <div className="border-start border-4 ps-3">

      <div className="mb-4">
        <h5>2026</h5>
        <p>
          Built ConnectSphere AI Platform
        </p>
      </div>

      <div className="mb-4">
        <h5>2025</h5>
        <p>
          Full Stack Development Training
        </p>
      </div>

      <div>
        <h5>2024</h5>
        <p>
          Started React & Spring Boot Development
        </p>
      </div>

    </div>

  </div>
</div>

          {/* CERTIFICATIONS */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">

              <h3 className="fw-bold mb-3">
                Certifications
              </h3>

              <ul>
                <li>Java Programming</li>
                <li>React Development</li>
                <li>Spring Boot Fundamentals</li>
                <li>AWS Cloud Basics</li>
              </ul>

            </div>
          </div>

          {/* RESUME */}
          <div className="card border-0 shadow-lg mt-4">
            <div className="card-body">

              <h3 className="fw-bold mb-3">
                Resume
              </h3>

              <input
                type="file"
                className="form-control mb-3"
                accept=".pdf,.doc,.docx"
              />

              <div className="d-flex gap-2 flex-wrap">

                <button className="btn btn-primary">
                  Upload Resume
                </button>

                <button className="btn btn-success">
                  Analyze Resume
                </button>

              </div>

            </div>
          </div>

          <div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-3">
      🤖 AI Career Insights
    </h3>

    <div className="alert alert-success">
      You have a strong Full Stack Developer profile.
    </div>

    <div className="alert alert-warning">
      Learning Docker and AWS can increase your job match score by 18%.
    </div>

    <div className="alert alert-primary">
      Recommended Career Path:
      Full Stack Developer → Software Engineer → Senior Engineer
    </div>

  </div>
</div>

<div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-3">
      🌐 Social Links
    </h3>

    <div className="mb-2">
      <strong>GitHub:</strong>
      <br />
      https://github.com/AshishKumar-2206
    </div>

    <div className="mb-2">
      <strong>LinkedIn:</strong>
      <br />
      Add Your LinkedIn URL
    </div>

    <div>
      <strong>Portfolio:</strong>
      <br />
      Add Your Portfolio URL
    </div>

  </div>
</div>

<div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-3">
      📊 Profile Analytics
    </h3>

    <div className="row text-center">

      <div className="col-md-4">
        <h2 className="text-primary">
          520
        </h2>

        <p>Profile Views</p>
      </div>

      <div className="col-md-4">
        <h2 className="text-success">
          148
        </h2>

        <p>Connections</p>
      </div>

      <div className="col-md-4">
        <h2 className="text-danger">
          24
        </h2>

        <p>Job Applications</p>
      </div>

    </div>

  </div>
</div>



<div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-3">
      ⭐ Featured Project
    </h3>

    <div
      className="p-4 rounded"
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#7c3aed)",
        color: "white"
      }}
    >
      <h4>
        ConnectSphere AI
      </h4>

      <p>
        AI-powered career networking platform
        built using React, Spring Boot and MySQL.
      </p>

      <button className="btn btn-light">
        View Project
      </button>

    </div>

  </div>
</div>
<div className="card border-0 shadow-lg mt-4">
  <div className="card-body">

    <h3 className="fw-bold mb-3">
      🏆 Achievements
    </h3>

    <ul>
      <li>Built ConnectSphere AI Platform</li>
      <li>Completed Full Stack Development Training</li>
      <li>Developed Spring Boot + React Projects</li>
      <li>Created AI Career Guidance System</li>
    </ul>

  </div>
</div>

<div className="row">

<div className="col-md-6">
  <div className="card shadow-lg">
     Project Screenshot
     Project Name
     View Project
  </div>
</div>

</div>

<div className="glass-card p-4 mt-4">

<h3>🤖 AI Career Assistant</h3>

<p>
Based on your profile, you have strong
potential for:
</p>

<ul>
<li>Software Engineer</li>
<li>Full Stack Developer</li>
<li>Backend Developer</li>
<li>AI Engineer</li>
</ul>

<button className="btn btn-primary">
Generate Career Plan
</button>

</div>

<div className="card shadow-lg mt-4">

<h3>🎯 Recommended Next Steps</h3>

<ul>
<li>Learn Docker</li>
<li>Learn AWS</li>
<li>Build 2 Production Projects</li>
<li>Improve System Design</li>
</ul>

</div>


        </div>
      </div>
    </>
  );
}