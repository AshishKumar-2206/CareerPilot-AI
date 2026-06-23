import { useState } from "react";
import Navbar from "../components/Navbar";

export default function ResumeBuilder() {
    const [resume, setResume] = useState({
        name: "",
        email: "",
        phone: "",
        skills: "",
        education: "",
        experience: ""
    });

    const handleChange = (e) => {
        setResume({
            ...resume,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Navbar />

            <div
                className="min-vh-100"
                style={{ background: "#f4f7fb" }}
            >
                <div className="container py-4">

                    {/* HEADER */}

                    <div
                        className="p-5 rounded-4 text-white shadow-lg mb-4"
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#7c3aed)"
                        }}
                    >
                        <h1 className="fw-bold">
                            📄 Resume Builder
                        </h1>

                        <p>
                            Create a professional ATS-friendly resume
                        </p>
                    </div>

                    <div className="row">

                        {/* FORM */}

                        <div className="col-lg-6">

                            <div className="card border-0 shadow-lg">

                                <div className="card-body">

                                    <h3 className="mb-4">
                                        Resume Details
                                    </h3>

                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control mb-3"
                                        placeholder="Full Name"
                                        onChange={handleChange}
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control mb-3"
                                        placeholder="Email"
                                        onChange={handleChange}
                                    />

                                    <input
                                        type="text"
                                        name="phone"
                                        className="form-control mb-3"
                                        placeholder="Phone Number"
                                        onChange={handleChange}
                                    />

                                    <textarea
                                        name="skills"
                                        className="form-control mb-3"
                                        rows="3"
                                        placeholder="Skills"
                                        onChange={handleChange}
                                    />

                                    <textarea
                                        name="education"
                                        className="form-control mb-3"
                                        rows="3"
                                        placeholder="Education"
                                        onChange={handleChange}
                                    />

                                    <textarea
                                        name="experience"
                                        className="form-control mb-3"
                                        rows="4"
                                        placeholder="Experience"
                                        onChange={handleChange}
                                    />

                                    <button className="btn btn-primary">
                                        Save Resume
                                    </button>

                                </div>

                            </div>

                        </div>

                        {/* PREVIEW */}

                        <div className="col-lg-6">

                            <div className="card border-0 shadow-lg">

                                <div className="card-body">

                                    <h3 className="mb-4">
                                        Resume Preview
                                    </h3>

                                    <h2>
                                        {resume.name || "Your Name"}
                                    </h2>

                                    <p>
                                        📧 {resume.email || "email@example.com"}
                                    </p>

                                    <p>
                                        📱 {resume.phone || "+91 XXXXX XXXXX"}
                                    </p>

                                    <hr />

                                    <h5>Skills</h5>

                                    <p>
                                        {resume.skills ||
                                            "React, Java, Spring Boot"}
                                    </p>

                                    <h5>Education</h5>

                                    <p>
                                        {resume.education ||
                                            "B.Tech Computer Science"}
                                    </p>

                                    <h5>Experience</h5>

                                    <p>
                                        {resume.experience ||
                                            "Fresher"}
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ATS SCORE */}

                    <div className="card border-0 shadow-lg mt-4">

                        <div className="card-body">

                            <h3>
                                🤖 ATS Resume Score
                            </h3>

                            <div className="progress mt-3">

                                <div
                                    className="progress-bar bg-success"
                                    style={{ width: "82%" }}
                                >
                                    82%
                                </div>

                            </div>
                            {/* AI RESUME INSIGHTS */}

                            <div className="card border-0 shadow-lg mt-4">

                                <div className="card-body">

                                    <h3>
                                        🤖 AI Resume Insights
                                    </h3>

                                    <div className="alert alert-success mt-3">
                                        Strong React and Spring Boot skills detected.
                                    </div>

                                    <div className="alert alert-warning">
                                        Consider adding:
                                        <ul className="mb-0 mt-2">
                                            <li>Docker</li>
                                            <li>AWS</li>
                                            <li>System Design</li>
                                        </ul>
                                    </div>

                                </div>

                            </div>
                            {/* TEMPLATES */}

                            <div className="card border-0 shadow-lg mt-4">

                                <div className="card-body">

                                    <h3>
                                        🎨 Resume Templates
                                    </h3>

                                    <div className="row mt-3">

                                        <div className="col-md-4">
                                            <div className="card text-center">
                                                <div className="card-body">
                                                    Modern Template
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card text-center">
                                                <div className="card-body">
                                                    Professional Template
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="card text-center">
                                                <div className="card-body">
                                                    ATS Friendly Template
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="card border-0 shadow-lg mt-4">

                                        <div className="card-body">

                                            <h3>
                                                📊 Resume Completion
                                            </h3>

                                            <div className="progress mt-3">

                                                <div
                                                    className="progress-bar bg-success"
                                                    style={{ width: "85%" }}
                                                >
                                                    85%
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className="card border-0 shadow-lg mt-4">

                                        <div className="card-body">

                                            <h3>
                                                💪 Resume Strength
                                            </h3>

                                            <ul>

                                                <li>Strong Technical Skills</li>

                                                <li>Good Project Experience</li>

                                                <li>Add Certifications</li>

                                                <li>Add GitHub Portfolio</li>

                                            </ul>

                                        </div>

                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-success mt-3">
                                📥 Download Resume
                            </button>

                            <p className="mt-3">
                                Good resume. Add more projects and certifications to improve score.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}