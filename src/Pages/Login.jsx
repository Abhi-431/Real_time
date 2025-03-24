import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To display error messages
  const navigate = useNavigate(); // For redirecting to dashboard

  // Dummy credentials for validation (You can replace this with your API logic)
  const validEmail = "user@example.com";
  const validPassword = "password123";

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and password match the valid credentials
    if (email === validEmail && password === validPassword) {
      alert("Login Successful! Redirecting to Dashboard...");
      navigate("/dashboard"); // Navigate to dashboard after successful login
    } else {
      setError("❌ Invalid email or password. Please try again."); // Show error message
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 shadow-sm rounded w-25">
        <h2 className="h4 font-weight-semibold mb-4 text-center">Login</h2>

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-primary text-decoration-none">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
