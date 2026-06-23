import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Company() {
    const [followedCompanies, setFollowedCompanies] = useState([]);

    const companies = [
        {
            name: "Google",
            industry: "Technology",
            employees: "180,000+",
            jobs: 120,
            rating: 4.9,
            hiring: true,
            description:
                "World leader in Search, Cloud Computing and AI.",
            skills: ["React", "Java", "Cloud"]
        },
        {
            name: "Microsoft",
            industry: "Software",
            employees: "220,000+",
            jobs: 95,
            rating: 4.8,
            hiring: true,
            description:
                "Building software solutions and cloud services.",
            skills: ["Azure", "Java", ".NET"]
        },
        {
            name: "Amazon",
            industry: "E-Commerce",
            employees: "1.5M+",
            jobs: 210,
            rating: 4.7,
            hiring: true,
            description:
                "Global leader in E-Commerce and AWS.",
            skills: ["AWS", "Java", "Spring Boot"]
        },
        {
            name: "Infosys",
            industry: "IT Services",
            employees: "300,000+",
            jobs: 75,
            rating: 4.4,
            hiring: true,
            description:
                "IT consulting and outsourcing company.",
            skills: ["Java", "React", "SQL"]
        },
        {
            name: "TCS",
            industry: "Consulting",
            employees: "600,000+",
            jobs: 88,
            rating: 4.5,
            hiring: false,
            description:
                "One of India's largest consulting firms.",
            skills: ["Java", "Cloud", "AI"]
        },
        {
            name: "Wipro",
            industry: "Technology",
            employees: "250,000+",
            jobs: 65,
            rating: 4.3,
            hiring: true,
            description:
                "Technology and business transformation services.",
            skills: ["React", "AWS", "Python"]
        }
    ];

    const handleFollow = (index) => {
        if (!followedCompanies.includes(index)) {
            setFollowedCompanies([...followedCompanies, index]);
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
                            🏢 Company Hub
                        </h1>

                        <p>
                            Discover companies and career opportunities
                        </p>
                    </div>

                    {/* FEATURED */}

                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <h4>
                                ⭐ Featured This Month
                            </h4>

                            <p>
                                Google, Microsoft and Amazon are actively hiring Full Stack Developers.
                            </p>

                        </div>

                    </div>

                    {/* SEARCH */}

                    <div className="card border-0 shadow mb-4">

                        <div className="card-body">

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Companies..."
                            />

                        </div>

                    </div>

                    {/* CARDS */}

                    <div className="row">

                        {companies.map((company, index) => (

                            <div
                                className="col-md-4 mb-4"
                                key={index}
                            >

                                <div className="card border-0 shadow-lg h-100">

                                    <div className="card-body">

                                        <div className="text-center">

                                            <img
                                                src={`https://api.dicebear.com/7.x/shapes/svg?seed=${company.name}`}
                                                width="90"
                                                height="90"
                                                alt="logo"
                                            />

                                            <h4 className="mt-3">
                                                {company.name}
                                            </h4>

                                            <p className="text-muted">
                                                {company.industry}
                                            </p>

                                        </div>

                                        <hr />

                                        <p>
                                            ⭐ Rating: {company.rating}
                                        </p>

                                        <p>
                                            👥 {company.employees}
                                        </p>

                                        <p>
                                            💼 {company.jobs} Jobs
                                        </p>

                                        <p>
                                            {company.hiring
                                                ? "🟢 Hiring Now"
                                                : "🔴 Not Hiring"}
                                        </p>

                                        <p>
                                            {company.description}
                                        </p>

                                        <div className="mb-3">

                                            {company.skills.map(
                                                (skill, i) => (
                                                    <span
                                                        key={i}
                                                        className="badge bg-light text-dark me-1"
                                                    >
                            {skill}
                          </span>
                                                )
                                            )}

                                        </div>

                                        <div className="d-flex gap-2">

                                            <button
                                                className={
                                                    followedCompanies.includes(index)
                                                        ? "btn btn-success"
                                                        : "btn btn-primary"
                                                }
                                                onClick={() =>
                                                    handleFollow(index)
                                                }
                                            >
                                                {followedCompanies.includes(index)
                                                    ? "✓ Following"
                                                    : "Follow"}
                                            </button>

                                            <button className="btn btn-outline-dark">
                                                View Company
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