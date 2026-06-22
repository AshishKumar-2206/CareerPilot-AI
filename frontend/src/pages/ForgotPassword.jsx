import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ width: "450px" }}>
        <h2 className="text-center mb-4">
          Forgot Password
        </h2>

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
        />

        <button className="btn btn-primary w-100">
          Send OTP
        </button>

        <Link
          to="/"
          className="text-center mt-3 d-block"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
}