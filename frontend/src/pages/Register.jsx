import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Register() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      await API.post("/register", {
        username,
        email,
        password
      });

      alert("Registration Successful 🚀");
      navigate("/");
    } catch (err) {
      alert("Registration Failed");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "#f3f2ef" }}
    >
      <div className="card shadow p-4" style={{ width: "500px" }}>

        <div className="text-center mb-4">
          <h1 className="text-primary fw-bold">ConnectSphere AI</h1>
          <p className="text-muted">Build Your Professional Network</p>
        </div>

        <h3 className="text-center mb-4">Create Account</h3>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* REGISTER BUTTON (WORKING ONLY ADDED LOGIC) */}
        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleRegister}
        >
          Register
        </button>

        <hr />

        <div className="text-center">
          <p>Already have an account?</p>
          <Link to="/" className="btn btn-outline-primary">
            Login
          </Link>
        </div>

      </div>
    </div>
  );
}