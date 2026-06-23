import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Jobs() {
const [search, setSearch] = useState("");

const jobs = [
{
company: "Google",
role: "React Developer",
salary: "₹12 LPA",
location: "Bangalore",
type: "Full Time",
match: "96%"
},
{
company: "Microsoft",
role: "Java Developer",
salary: "₹15 LPA",
location: "Hyderabad",
type: "Remote",
match: "94%"
},
{
company: "Amazon",
role: "Spring Boot Engineer",
salary: "₹18 LPA",
location: "Chennai",
type: "Hybrid",
match: "92%"
},
{
company: "Infosys",
role: "Full Stack Developer",
salary: "₹8 LPA",
location: "Bhubaneswar",
type: "Full Time",
match: "90%"
}
];

const filteredJobs = jobs.filter(
(job) =>
job.role.toLowerCase().includes(search.toLowerCase()) ||
job.company.toLowerCase().includes(search.toLowerCase())
);

return (
<> <Navbar />

```
  <div
    className="min-vh-100"
    style={{ background: "#f4f7fb" }}
  >
    <div className="container py-4">

      <div
        className="p-4 rounded-4 text-white mb-4 shadow"
        style={{
          background:
            "linear-gradient(135deg,#2563eb,#7c3aed)"
        }}
      >
        <h2 className="fw-bold">
          💼 Find Your Dream Job
        </h2>

        <p className="mb-0">
          AI-powered job recommendations
        </p>
      </div>

      <div className="card border-0 shadow mb-4">
        <div className="card-body text-center">
          <h2>24</h2>
          <p>Applications Submitted</p>
        </div>
      </div>

      <div className="card border-0 shadow mb-4">
        <div className="card-body">
          <input
            type="text"
            className="form-control"
            placeholder="Search Jobs..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>
      </div>

      <div className="alert alert-primary shadow-sm">
        🤖 Recommended:
        <strong>
          {" "}
          React Developer,
          Full Stack Developer,
          Java Developer
        </strong>
      </div>

      <div className="row">

        {filteredJobs.map((job, index) => (

          <div
            className="col-md-6 mb-4"
            key={index}
          >
            <div className="card border-0 shadow-lg h-100">

              <div className="card-body">

                <div className="d-flex align-items-center gap-3 mb-3">

                  <img
                    src={`https://logo.clearbit.com/${job.company.toLowerCase()}.com`}
                    alt="logo"
                    width="50"
                  />

                  <div>
                    <h5 className="mb-0">
                      {job.company}
                    </h5>

                    <small>
                      {job.role}
                    </small>
                  </div>

                </div>

                <div className="badge bg-success mb-3">
                  AI Match: {job.match}
                </div>

                <hr />

                <p>
                  📍 {job.location}
                </p>

                <p>
                  💰 {job.salary}
                </p>

                <p>
                  🏢 {job.type}
                </p>

                <div className="d-flex gap-2">

                  <button className="btn btn-primary">
                    Apply Now
                  </button>

                  <button className="btn btn-outline-dark">
                    Save Job
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
