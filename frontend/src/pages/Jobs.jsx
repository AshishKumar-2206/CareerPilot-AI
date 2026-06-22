export default function Jobs() {
  return (
    <div className="container mt-4">

      <h2>
        Available Jobs
      </h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Jobs..."
      />

      <div className="card p-3 mb-3">

        <h4>Java Developer</h4>

        <p>Google</p>

        <button className="btn btn-success me-2">
          Apply
        </button>

        <button className="btn btn-warning">
          Save Job
        </button>

      </div>

      <div className="card p-3 mb-3">

        <h4>React Developer</h4>

        <p>Microsoft</p>

        <button className="btn btn-success me-2">
          Apply
        </button>

        <button className="btn btn-warning">
          Save Job
        </button>

      </div>

    </div>
  );
}