import { useState } from "react";
import Navbar from "../components/Navbar";

export default function CareerRoadmap() {
    const [role, setRole] = useState("Full Stack Developer");

    const roadmaps = {
        "Frontend Developer": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Next.js",
            "Portfolio Projects"
        ],

        "Java Developer": [
            "Core Java",
            "OOP",
            "Collections",
            "JDBC",
            "Spring Boot",
            "Microservices",
            "Projects"
        ],

        "Full Stack Developer": [
            "HTML/CSS",
            "JavaScript",
            "React",
            "Java",
            "Spring Boot",
            "MySQL",
            "Docker",
            "AWS"
        ],

        "AI Engineer": [
            "Python",
            "NumPy",
            "Pandas",
            "Machine Learning",
            "Deep Learning",
            "LLMs",
            "AI Projects"
        ],

        "DevOps Engineer": [
            "Linux",
            "Git",
            "Docker",
            "Kubernetes",
            "AWS",
            "CI/CD",
            "Monitoring"
        ]
    };

    return (
        <>
            <Navbar />

            <div
                className="min-vh-100"
                style={{ background: "#f4f7fb" }}
            >
                <div className="container py-4">

                    <div
                        className="p-5 rounded-4 text-white shadow-lg mb-4"
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#7c3aed)"
                        }}
                    >
                        <h1 className="fw-bold">
                            🎯 Career Roadmap
                        </h1>

                        <p>
                            Follow a structured learning path to your dream career
                        </p>
                    </div>

                    <div className="card border-0 shadow-lg mb-4">

                        <div className="card-body">

                            <h4>Select Career Goal</h4>

                            <select
                                className="form-select mt-3"
                                value={role}
                                onChange={(e) =>
                                    setRole(e.target.value)
                                }
                            >
                                <option>Frontend Developer</option>
                                <option>Java Developer</option>
                                <option>Full Stack Developer</option>
                                <option>AI Engineer</option>
                                <option>DevOps Engineer</option>
                            </select>

                        </div>

                    </div>

                    <div className="card border-0 shadow-lg">

                        <div className="card-body">

                            <h3>
                                🚀 {role} Roadmap
                            </h3>

                            {roadmaps[role].map((step, index) => (

                                <div
                                    key={index}
                                    className="d-flex align-items-center mt-4"
                                >
                                    <div
                                        className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                                        style={{
                                            width: "45px",
                                            height: "45px"
                                        }}
                                    >
                                        {index + 1}
                                    </div>

                                    <div className="ms-3">

                                        <h5>{step}</h5>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    <div className="card border-0 shadow-lg mt-4">

                        <div className="card-body">

                            <h4>
                                🤖 AI Recommendation
                            </h4>

                            <p>
                                Based on your profile, Full Stack Developer is currently the strongest path because you are learning React, Spring Boot and MySQL.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}