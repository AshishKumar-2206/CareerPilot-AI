export default function Profile() {
  return (
    <div className="container mt-4">

      <div className="card">

        <div
          style={{
            height: "200px",
            background:
              "linear-gradient(to right,#0077b5,#00b4d8)"
          }}
        ></div>

        <div className="text-center">

          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="rounded-circle border border-5 border-white"
            style={{
              width: "150px",
              marginTop: "-75px"
            }}
          />

          <h2 className="mt-3">
            Ashish Kumar Sahoo
          </h2>

          <p className="text-muted">
            Full Stack Developer
          </p>

          <button className="btn btn-primary">
            Edit Profile
          </button>

        </div>

        <hr />

        <div className="p-4">

          <h4>Education</h4>
          <p>BCA - Computer Applications</p>

          <h4>Experience</h4>
          <p>Java Full Stack Developer</p>

          <h4>Skills</h4>

          <span className="badge bg-primary m-1">
            Java
          </span>

          <span className="badge bg-success m-1">
            Spring Boot
          </span>

          <span className="badge bg-info m-1">
            React
          </span>

          <span className="badge bg-warning m-1">
            MySQL
          </span>

          <h4 className="mt-4">
            Certifications
          </h4>

          <ul>
            <li>Oracle Java Certification</li>
            <li>AWS Cloud Practitioner</li>
          </ul>

        </div>

      </div>

    </div>
  );
}