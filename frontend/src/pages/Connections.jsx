import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Connections() {
    const [connected, setConnected] = useState([]);

    const users = [
        {
            name: "Rahul Sharma",
            role: "Java Developer",
            mutual: 24,
            skills: ["Java", "Spring Boot", "MySQL"]
        },
        {
            name: "Priya Das",
            role: "React Developer",
            mutual: 18,
            skills: ["React", "JavaScript", "Bootstrap"]
        },
        {
            name: "John Smith",
            role: "AI Engineer",
            mutual: 30,
            skills: ["Python", "AI", "Machine Learning"]
        },
        {
            name: "Emma Wilson",
            role: "Full Stack Developer",
            mutual: 12,
            skills: ["React", "Spring Boot", "Docker"]
        },
        {
            name: "David Lee",
            role: "Cloud Engineer",
            mutual: 20,
            skills: ["AWS", "Docker", "Kubernetes"]
        },
        {
            name: "Sophia Brown",
            role: "UI/UX Designer",
            mutual: 15,
            skills: ["Figma", "UI Design", "Adobe XD"]
        }
    ];

    const handleConnect = (index) => {
        if (!connected.includes(index)) {
            setConnected([...connected, index]);
        }
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
                            🌐 Build Your Network
                        </h1>

                        <p className="mb-0">
                            Connect with professionals and grow your career
                        </p>
                    </div>

                    {/* NETWORK STRENGTH */}
                    <div className="card border-0 shadow mb-4">
                        <div className="card-body">

                            <h5>
                                🎯 Networking Strength
                            </h5>

                            <div className="progress">

                                <div
                                    className="progress-bar bg-success"
                                    style={{ width: "82%" }}
                                >
                                    82%
                                </div>

                            </div>

                        </div>
                    </div>

                    {/* SEARCH */}
                    <div className="card border-0 shadow mb-4">
                        <div className="card-body">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search professionals..."
                            />

                        </div>
                    </div>

                    {/* AI RECOMMENDATION */}
                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <h5>
                                🤖 AI Recommended Connections
                            </h5>

                            <p>
                                Based on your profile, connect with:
                            </p>

                            <ul>
                                <li>Java Developers</li>
                                <li>React Developers</li>
                                <li>Cloud Engineers</li>
                                <li>AI Engineers</li>
                            </ul>

                        </div>

                    </div>

                    {/* STATS */}
                    <div className="row mb-4">

                        <div className="col-md-4">

                            <div className="card border-0 shadow text-center">

                                <div className="card-body">

                                    <h2>250</h2>

                                    <p>Connections</p>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card border-0 shadow text-center">

                                <div className="card-body">

                                    <h2>35</h2>

                                    <p>Pending Requests</p>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">

                            <div className="card border-0 shadow text-center">

                                <div className="card-body">

                                    <h2>72</h2>

                                    <p>Profile Views</p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* USERS */}
                    <div className="row">

                        {users.map((user, index) => (

                            <div
                                key={index}
                                className="col-md-4 mb-4"
                            >

                                <div
                                    className="card border-0 shadow-lg h-100"
                                    style={{
                                        transition: "0.3s"
                                    }}
                                >

                                    <div className="card-body text-center">

                                        <img
                                            src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${user.name}`}
                                            alt="profile"
                                            width="100"
                                            height="100"
                                            className="rounded-circle mb-3"
                                        />

                                        <h5>
                                            {user.name}
                                        </h5>

                                        <p className="text-muted">
                                            {user.role}
                                        </p>

                                        <div className="mb-2">

                      <span className="badge bg-success">
                        Open To Work
                      </span>

                                        </div>

                                        <small>
                                            {user.mutual} Mutual Connections
                                        </small>

                                        <div className="mt-3">

                                            {user.skills.map((skill, i) => (

                                                <span
                                                    key={i}
                                                    className="badge bg-light text-dark me-1 mb-1"
                                                >
                          {skill}
                        </span>

                                            ))}

                                        </div>

                                        <div className="mt-4">

                                            <button
                                                className={
                                                    connected.includes(index)
                                                        ? "btn btn-success me-2"
                                                        : "btn btn-primary me-2"
                                                }
                                                onClick={() =>
                                                    handleConnect(index)
                                                }
                                            >
                                                {connected.includes(index)
                                                    ? "✓ Connected"
                                                    : "Connect"}
                                            </button>

                                            <button className="btn btn-outline-dark">
                                                View Profile
                                            </button>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </div>
        </>
    );
}