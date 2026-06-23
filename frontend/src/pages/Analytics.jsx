import Navbar from "../components/Navbar";

export default function Analytics() {
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
                            📊 Analytics Dashboard
                        </h1>

                        <p>
                            Track your career growth and performance
                        </p>
                    </div>

                    {/* STATS */}

                    <div className="row">

                        <div className="col-md-3 mb-4">

                            <div className="card border-0 shadow-lg text-center">

                                <div className="card-body">

                                    <h1 className="text-primary">
                                        524
                                    </h1>

                                    <p>
                                        👀 Profile Views
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-3 mb-4">

                            <div className="card border-0 shadow-lg text-center">

                                <div className="card-body">

                                    <h1 className="text-success">
                                        42
                                    </h1>

                                    <p>
                                        💼 Job Applications
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-3 mb-4">

                            <div className="card border-0 shadow-lg text-center">

                                <div className="card-body">

                                    <h1 className="text-warning">
                                        82%
                                    </h1>

                                    <p>
                                        📄 Resume Score
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="col-md-3 mb-4">

                            <div className="card border-0 shadow-lg text-center">

                                <div className="card-body">

                                    <h1 className="text-danger">
                                        89%
                                    </h1>

                                    <p>
                                        🎯 Career Score
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* PROGRESS SECTION */}

                    <div className="card border-0 shadow-lg mb-4">

                        <div className="card-body">

                            <h4>
                                🚀 Learning Progress
                            </h4>

                            <div className="progress mt-3">

                                <div
                                    className="progress-bar bg-success"
                                    style={{ width: "72%" }}
                                >
                                    72%
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* NETWORK GROWTH */}

                    <div className="card border-0 shadow-lg mb-4">

                        <div className="card-body">

                            <h4>
                                🌐 Network Growth
                            </h4>

                            <p>
                                Total Connections: 268
                            </p>

                            <div className="progress">

                                <div
                                    className="progress-bar bg-primary"
                                    style={{ width: "68%" }}
                                >
                                    68%
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* AI INSIGHTS */}

                    <div className="card border-0 shadow-lg">

                        <div className="card-body">

                            <h4>
                                🤖 AI Insights
                            </h4>

                            <div className="alert alert-success mt-3">
                                Your profile views increased by 23% this month.
                            </div>

                            <div className="alert alert-primary">
                                React and Spring Boot are your strongest skills.
                            </div>
                            {/* WEEKLY PERFORMANCE */}

                            <div className="card border-0 shadow-lg mt-4">
                                <div className="card-body">

                                    <h4>📈 Weekly Performance</h4>

                                    <div className="row text-center">

                                        <div className="col-md-3">
                                            <h2 className="text-primary">+23%</h2>
                                            <p>Profile Views</p>
                                        </div>

                                        <div className="col-md-3">
                                            <h2 className="text-success">+12%</h2>
                                            <p>Connections</p>
                                        </div>

                                        <div className="col-md-3">
                                            <h2 className="text-warning">+8%</h2>
                                            <p>Applications</p>
                                        </div>

                                        <div className="col-md-3">
                                            <h2 className="text-danger">+15%</h2>
                                            <p>Skills Growth</p>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            {/* TOP SKILLS */}

                            <div className="card border-0 shadow-lg mt-4">
                                <div className="card-body">

                                    <h4>🏆 Top Skills</h4>

                                    <div className="d-flex flex-wrap gap-2">

                                        <span className="badge bg-primary p-2">React</span>
                                        <span className="badge bg-success p-2">Spring Boot</span>
                                        <span className="badge bg-warning text-dark p-2">Java</span>
                                        <span className="badge bg-danger p-2">MySQL</span>
                                        <span className="badge bg-info p-2">Docker</span>

                                    </div>

                                </div>
                            </div>

                            <div className="alert alert-warning">
                                Learn Docker and AWS to improve job matching.
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}