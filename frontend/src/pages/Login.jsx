import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Login() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/login", {
        email,
        password
      });

      if (res.data) {
        alert("Login Successful 🚀");
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    } catch (err) {
      alert("Login Failed");
    }
  };

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(135deg,#0077b5,#00b4d8,#90e0ef)",
        backgroundSize: "400% 400%"
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{ width: "450px", borderRadius: "20px" }}
      >

        <div className="text-center mb-4">
          <h1 className="text-primary fw-bold">ConnectSphere AI</h1>
          <p className="text-muted">Professional Networking Platform</p>
        </div>

        <h3 className="text-center mb-4">Sign In</h3>

        {/* EMAIL */}
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type={showPassword ? "text" : "password"}
          className="form-control mb-2"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* SHOW PASSWORD BUTTON (UNCHANGED) */}
        <button
          type="button"
          className="btn btn-outline-secondary btn-sm mb-3"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide Password" : "Show Password"}
        </button>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox" id="remember" />
          <label className="form-check-label" htmlFor="remember">
            Remember Me
          </label>
        </div>

        {/* LOGIN BUTTON (NOW WORKING) */}
        <button
          className="btn btn-primary w-100 mb-3"
          onClick={handleLogin}
        >
          Login
        </button>

        <button className="btn btn-danger w-100 mb-2">
          Continue with Google
        </button>

        <button className="btn btn-dark w-100 mb-3">
          Continue with GitHub
        </button>

        <div className="text-center">
          <Link to="/forgot-password" className="text-decoration-none">
            Forgot Password?
          </Link>
        </div>

        <hr />

        <div className="text-center">
          <p>New User?</p>
          <Link to="/register" className="btn btn-success">
            Create Account
          </Link>
        </div>

      </div>
    </div>
  );
}