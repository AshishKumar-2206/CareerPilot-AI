import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AICareerCenter() {
  const [resumeScore, setResumeScore] = useState(null);
  const [roadmap, setRoadmap] = useState([]);
  const [question, setQuestion] = useState("");
  const [linkedinPost, setLinkedinPost] = useState("");

  return (
      <>
        <Navbar />

        <div
            className="min-vh-100"
            style={{
              background: "#f4f7fb"
            }}
        >
          <div className="container py-4">

            {/* HEADER */}
            <div
                className="p-5 rounded-4 shadow-lg text-white mb-4"
                style={{
                  background:
                      "linear-gradient(135deg,#2563eb,#7c3aed)"
                }}
            >
              <h1 className="fw-bold">
                🤖 AI Career Center
              </h1>

              <p className="mb-0">
                Your Personal AI Career Assistant
              </p>
            </div>

            <div className="row">

              {/* RESUME ANALYZER */}
              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-lg h-100">

                  <div className="card-body">

                    <h3>📄 Resume Analyzer</h3>

                    <p>
                      Upload your resume and get AI feedback.
                    </p>

                    <input
                        type="file"
                        className="form-control mb-3"
                    />

                    <button
                        className="btn btn-primary"
                        onClick={() => setResumeScore(87)}
                    >
                      Analyze Resume
                    </button>

                    {resumeScore && (
                        <div className="alert alert-success mt-3">
                          Resume Score: {resumeScore}%
                        </div>
                    )}

                  </div>

                </div>

              </div>

              {/* CAREER ROADMAP */}
              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-lg h-100">

                  <div className="card-body">

                    <h3>🛣 Career Roadmap</h3>

                    <p>
                      Generate your personalized roadmap.
                    </p>

                    <button
                        className="btn btn-success"
                        onClick={() =>
                            setRoadmap([
                              "Learn React",
                              "Master Spring Boot",
                              "Learn MySQL",
                              "Learn Docker",
                              "Learn AWS",
                              "System Design"
                            ])
                        }
                    >
                      Generate Roadmap
                    </button>

                    {roadmap.length > 0 && (
                        <ul className="mt-3">

                          {roadmap.map((step, index) => (
                              <li key={index}>
                                {step}
                              </li>
                          ))}

                        </ul>
                    )}

                  </div>

                </div>

              </div>

              {/* INTERVIEW QUESTIONS */}
              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-lg h-100">

                  <div className="card-body">

                    <h3>🎤 Interview Practice</h3>

                    <p>
                      Practice interview questions.
                    </p>

                    <button
                        className="btn btn-warning"
                        onClick={() =>
                            setQuestion(
                                "Explain the difference between React State and Props."
                            )
                        }
                    >
                      Start Practice
                    </button>

                    {question && (
                        <div className="alert alert-warning mt-3">
                          {question}
                        </div>
                    )}

                  </div>

                </div>

              </div>

              {/* LINKEDIN POST GENERATOR */}
              <div className="col-md-6 mb-4">

                <div className="card border-0 shadow-lg h-100">

                  <div className="card-body">

                    <h3>✍ LinkedIn Post Generator</h3>

                    <p>
                      Generate professional LinkedIn posts.
                    </p>

                    <button
                        className="btn btn-info text-white"
                        onClick={() =>
                            setLinkedinPost(
                                "🚀 Excited to continue my Full Stack Development journey! Currently learning React, Spring Boot, MySQL, Docker, and AI technologies. Every day is a step toward becoming a better software engineer. #CareerGrowth #FullStackDeveloper #AI"
                            )
                        }
                    >
                      Generate Post
                    </button>

                    {linkedinPost && (
                        <div className="alert alert-info mt-3">
                          {linkedinPost}
                        </div>
                    )}

                  </div>

                </div>

              </div>

            </div>

            {/* CAREER SCORE */}
            <div className="card border-0 shadow-lg mt-4">

              <div className="card-body">

                <h3>
                  🎯 Career Readiness Score
                </h3>

                <div className="progress mt-3">

                  <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "87%" }}
                  >
                    87%
                  </div>

                </div>

                <p className="mt-3">
                  Strong Full Stack Developer profile.
                  Improve Docker, AWS, and System Design
                  to reach 95% readiness.
                </p>

              </div>

            </div>

          </div>
        </div>
      </>
  );
}