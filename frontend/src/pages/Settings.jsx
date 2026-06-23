import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Settings() {
    const [darkMode, setDarkMode] = useState(false);
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [jobAlerts, setJobAlerts] = useState(true);
    const [profileVisibility, setProfileVisibility] = useState(true);

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
                            ⚙️ Settings
                        </h1>

                        <p className="mb-0">
                            Manage your account, privacy and preferences
                        </p>
                    </div>

                    {/* ACCOUNT SETTINGS */}

                    <div className="card shadow border-0 mb-4">

                        <div className="card-body">

                            <h4 className="mb-3">
                                👤 Account Settings
                            </h4>

                            <div className="mb-3">
                                <label className="form-label">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="Ashish Kumar"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    defaultValue="ashish@gmail.com"
                                />
                            </div>

                            <button className="btn btn-primary">
                                Save Changes
                            </button>

                        </div>

                    </div>

                    {/* APPEARANCE */}

                    <div className="card shadow border-0 mb-4">

                        <div className="card-body">

                            <h4 className="mb-3">
                                🎨 Appearance
                            </h4>

                            <div className="form-check form-switch">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={darkMode}
                                    onChange={() =>
                                        setDarkMode(!darkMode)
                                    }
                                />

                                <label className="form-check-label">
                                    Dark Mode
                                </label>

                            </div>

                        </div>

                    </div>

                    {/* NOTIFICATIONS */}

                    <div className="card shadow border-0 mb-4">

                        <div className="card-body">

                            <h4 className="mb-3">
                                🔔 Notifications
                            </h4>

                            <div className="form-check form-switch mb-3">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={emailNotifications}
                                    onChange={() =>
                                        setEmailNotifications(
                                            !emailNotifications
                                        )
                                    }
                                />

                                <label className="form-check-label">
                                    Email Notifications
                                </label>

                            </div>

                            <div className="form-check form-switch">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={jobAlerts}
                                    onChange={() =>
                                        setJobAlerts(!jobAlerts)
                                    }
                                />

                                <label className="form-check-label">
                                    Job Alerts
                                </label>

                            </div>

                        </div>

                    </div>

                    {/* PRIVACY */}

                    <div className="card shadow border-0 mb-4">

                        <div className="card-body">

                            <h4 className="mb-3">
                                🔒 Privacy
                            </h4>

                            <div className="form-check form-switch">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={profileVisibility}
                                    onChange={() =>
                                        setProfileVisibility(
                                            !profileVisibility
                                        )
                                    }
                                />

                                <label className="form-check-label">
                                    Public Profile
                                </label>

                            </div>

                        </div>

                    </div>

                    {/* SECURITY */}

                    <div className="card shadow border-0 mb-4">

                        <div className="card-body">

                            <h4 className="mb-3">
                                🛡️ Security
                            </h4>

                            <button className="btn btn-warning me-2">
                                Change Password
                            </button>

                            <button className="btn btn-danger">
                                Logout All Devices
                            </button>

                        </div>

                    </div>

                    {/* AI SETTINGS */}

                    <div className="card shadow border-0">

                        <div className="card-body">

                            <h4 className="mb-3">
                                🤖 AI Preferences
                            </h4>

                            <select className="form-select">

                                <option>
                                    Full Stack Developer
                                </option>

                                <option>
                                    Java Developer
                                </option>

                                <option>
                                    React Developer
                                </option>

                                <option>
                                    AI Engineer
                                </option>

                            </select>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}