import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // For redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Registered:", { name, email, password });

    // Dummy registration logic (replace with real API logic)
    if (name && email && password) {
      alert("Registration Successful! Redirecting to Dashboard...");
      navigate("/dashboard"); // Navigate to Dashboard after registration
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-4 shadow rounded w-25">
        <h2 className="h4 font-weight-bold mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your full name"
              required
            />
          </div>
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
            Register
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-primary text-decoration-none">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
