import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Notifications() {
    const [notifications] = useState([
        {
            type: "job",
            icon: "💼",
            title: "New Job Match",
            message: "Google posted a React Developer position.",
            time: "2 mins ago"
        },
        {
            type: "connection",
            icon: "🤝",
            title: "Connection Request",
            message: "Rahul Sharma wants to connect with you.",
            time: "10 mins ago"
        },
        {
            type: "message",
            icon: "💬",
            title: "New Message",
            message: "Priya Das sent you a message.",
            time: "30 mins ago"
        },
        {
            type: "ai",
            icon: "🤖",
            title: "AI Suggestion",
            message: "Improve Docker skills to increase job match score.",
            time: "1 hour ago"
        },
        {
            type: "profile",
            icon: "👀",
            title: "Profile View",
            message: "Your profile was viewed by Microsoft Recruiter.",
            time: "2 hours ago"
        },
        {
            type: "career",
            icon: "🎯",
            title: "Career Score Updated",
            message: "Your Career Readiness Score increased to 89%.",
            time: "Today"
        }
    ]);

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
                        className="p-5 rounded-4 shadow-lg text-white mb-4"
                        style={{
                            background:
                                "linear-gradient(135deg,#2563eb,#7c3aed)"
                        }}
                    >
                        <h1 className="fw-bold">
                            🔔 Notifications
                        </h1>

                        <p className="mb-0">
                            Stay updated with jobs, messages, AI insights and connections
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="row mb-4">

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>12</h2>
                                    <p>Unread</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>5</h2>
                                    <p>Messages</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>3</h2>
                                    <p>Job Alerts</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>4</h2>
                                    <p>Requests</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* AI SUMMARY */}
                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <h5>
                                🤖 AI Daily Summary
                            </h5>

                            <ul className="mb-0">
                                <li>3 new jobs match your profile.</li>
                                <li>2 professionals viewed your profile.</li>
                                <li>1 new networking opportunity available.</li>
                                <li>Career score improved this week.</li>
                            </ul>

                        </div>

                    </div>

                    {/* NOTIFICATION LIST */}

                    <div className="card border-0 shadow-lg">

                        <div className="card-header bg-white">
                            <h4 className="mb-0">
                                Recent Notifications
                            </h4>
                        </div>

                        <div className="card-body">

                            {notifications.map((item, index) => (

                                <div
                                    key={index}
                                    className="border-bottom py-3"
                                >

                                    <div className="d-flex justify-content-between">

                                        <div>

                                            <h5>
                                                {item.icon} {item.title}
                                            </h5>

                                            <p className="mb-1">
                                                {item.message}
                                            </p>

                                            <small className="text-muted">
                                                {item.time}
                                            </small>

                                        </div>

                                        <button className="btn btn-outline-primary btn-sm">
                                            View
                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}