import Navbar from "../components/Navbar";

export default function LearningHub() {
    const courses = [
        {
            title: "React Masterclass",
            level: "Beginner",
            duration: "12 Hours",
            progress: 80
        },
        {
            title: "Spring Boot Complete Guide",
            level: "Intermediate",
            duration: "18 Hours",
            progress: 60
        },
        {
            title: "Docker & Kubernetes",
            level: "Advanced",
            duration: "15 Hours",
            progress: 30
        },
        {
            title: "AWS Cloud Fundamentals",
            level: "Intermediate",
            duration: "10 Hours",
            progress: 50
        }
    ];

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
                            🎓 Learning Hub
                        </h1>

                        <p>
                            Learn. Build. Get Hired.
                        </p>
                    </div>

                    {/* STATS */}

                    <div className="row mb-4">

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>12</h2>
                                    <p>Courses Completed</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>28</h2>
                                    <p>Day Streak 🔥</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>1450</h2>
                                    <p>XP Points ⭐</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card border-0 shadow text-center">
                                <div className="card-body">
                                    <h2>8</h2>
                                    <p>Certificates 🏆</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* AI RECOMMENDATION */}

                    <div className="card border-0 shadow mb-4">
                        <div className="card-body">

                            <h4>
                                🤖 AI Recommended Skills
                            </h4>

                            <div className="d-flex flex-wrap gap-2">

                <span className="badge bg-primary p-2">
                  React
                </span>

                                <span className="badge bg-success p-2">
                  Spring Boot
                </span>

                                <span className="badge bg-warning text-dark p-2">
                  Docker
                </span>

                                <span className="badge bg-danger p-2">
                  AWS
                </span>

                                <span className="badge bg-info p-2">
                  System Design
                </span>

                            </div>

                        </div>
                    </div>

                    {/* SKILL PROGRESS */}

                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <h4>
                                📈 Skill Progress
                            </h4>

                            <p>React</p>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar"
                                    style={{ width: "85%" }}
                                >
                                    85%
                                </div>
                            </div>

                            <p>Spring Boot</p>
                            <div className="progress mb-3">
                                <div
                                    className="progress-bar bg-success"
                                    style={{ width: "75%" }}
                                >
                                    75%
                                </div>
                            </div>

                            <p>MySQL</p>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-warning"
                                    style={{ width: "70%" }}
                                >
                                    70%
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* COURSES */}

                    <div className="row">

                        {courses.map((course, index) => (

                            <div
                                key={index}
                                className="col-md-6 mb-4"
                            >

                                <div className="card border-0 shadow-lg h-100">

                                    <div className="card-body">

                                        <h4>
                                            {course.title}
                                        </h4>

                                        <p>
                                            📚 {course.level}
                                        </p>

                                        <p>
                                            ⏱ {course.duration}
                                        </p>

                                        <div className="progress mb-3">

                                            <div
                                                className="progress-bar bg-primary"
                                                style={{
                                                    width: `${course.progress}%`
                                                }}
                                            >
                                                {course.progress}%
                                            </div>

                                        </div>

                                        <button className="btn btn-primary">
                                            Continue Learning
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* CERTIFICATES */}

                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <h4>
                                🏆 Certificates
                            </h4>

                            <ul className="mb-0">
                                <li>React Development Certificate</li>
                                <li>Java Programming Certificate</li>
                                <li>Spring Boot Fundamentals</li>
                                <li>AWS Cloud Basics</li>
                            </ul>

                        </div>

                    </div>

                    {/* ACHIEVEMENTS */}

                    <div className="card border-0 shadow">

                        <div className="card-body">

                            <h4>
                                🎖 Achievements
                            </h4>

                            <div className="d-flex flex-wrap gap-3">

                <span className="badge bg-warning text-dark p-3">
                  🥇 Top Learner
                </span>

                                <span className="badge bg-success p-3">
                  🔥 28 Day Streak
                </span>

                                <span className="badge bg-primary p-3">
                  💯 100 Hours Learned
                </span>

                                <span className="badge bg-danger p-3">
                  🚀 Career Builder
                </span>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}