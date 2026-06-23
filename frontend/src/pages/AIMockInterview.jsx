import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AIMockInterview() {
    const [role, setRole] = useState("Frontend Developer");
    const [difficulty, setDifficulty] = useState("Easy");
    const [score, setScore] = useState(null);

    const questions = {
        "Frontend Developer": [
            "What is React?",
            "What are React Hooks?",
            "Difference between State and Props?"
        ],

        "Java Developer": [
            "What is JVM?",
            "Difference between JDK and JRE?",
            "What is Spring Boot?"
        ],

        "Full Stack Developer": [
            "Explain REST API.",
            "What is JWT Authentication?",
            "Difference between SQL and NoSQL?"
        ]
    };

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
                        className="p-5 rounded-4 text-white shadow-lg mb-4"
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#7c3aed)"
                        }}
                    >
                        <h1 className="fw-bold">
                            🤖 AI Mock Interview
                        </h1>

                        <p className="mb-0">
                            Practice interviews and improve your confidence
                        </p>
                    </div>

                    {/* ROLE + DIFFICULTY */}

                    <div className="card border-0 shadow-lg mb-4">
                        <div className="card-body">

                            <h4>Select Interview Role</h4>

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
                            </select>

                            <h4 className="mt-4">
                                Difficulty Level
                            </h4>

                            <select
                                className="form-select mt-3"
                                value={difficulty}
                                onChange={(e) =>
                                    setDifficulty(e.target.value)
                                }
                            >
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                            </select>

                        </div>
                    </div>

                    {/* QUESTIONS */}

                    <div className="card border-0 shadow-lg">
                        <div className="card-body">

                            <h4>
                                Interview Questions
                            </h4>

                            {questions[role].map(
                                (question, index) => (
                                    <div
                                        key={index}
                                        className="mt-4"
                                    >
                                        <h6>
                                            Q{index + 1}. {question}
                                        </h6>

                                        <textarea
                                            className="form-control mt-2"
                                            rows="3"
                                            placeholder="Type your answer..."
                                        />
                                    </div>
                                )
                            )}

                            <button
                                className="btn btn-primary mt-4"
                                onClick={() =>
                                    setScore(
                                        Math.floor(Math.random() * 25) + 75
                                    )
                                }
                            >
                                Submit Interview
                            </button>

                        </div>
                    </div>

                    {/* RESULT */}

                    {score && (
                        <div className="card border-0 shadow-lg mt-4">

                            <div className="card-body text-center">

                                <h3>
                                    🏆 Interview Result
                                </h3>

                                <h1
                                    className={
                                        score >= 90
                                            ? "text-success"
                                            : score >= 80
                                                ? "text-primary"
                                                : "text-warning"
                                    }
                                >
                                    {score}%
                                </h1>

                                <p>
                                    AI Hiring Readiness Score
                                </p>

                                <div className="progress mt-3">

                                    <div
                                        className="progress-bar bg-success"
                                        style={{
                                            width: `${score}%`
                                        }}
                                    >
                                        {score}%
                                    </div>

                                </div>

                            </div>

                        </div>
                    )}

                    {/* AI FEEDBACK */}

                    <div className="card border-0 shadow-lg mt-4">

                        <div className="card-body">

                            <h4>
                                🤖 AI Feedback
                            </h4>

                            <div className="alert alert-success mt-3">
                                Communication Skills: 85%
                            </div>

                            <div className="alert alert-primary">
                                Technical Accuracy: 80%
                            </div>

                            <div className="alert alert-warning">
                                Improve explanation depth and add real-world examples.
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}