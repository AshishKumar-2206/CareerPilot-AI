export default function JobCard({ title, company }) {
  return (
    <div className="card glass p-3 mb-2 job-card">

      <h6>{title}</h6>
      <p className="text-muted">{company}</p>

      <button className="btn btn-primary btn-sm">
        Apply
      </button>

    </div>
  );
}