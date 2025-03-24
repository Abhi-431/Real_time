import React from "react";

const Dashboard = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <h1 className="display-4 font-weight-bold mb-4">Dashboard</h1>
      <button className="btn btn-success px-4 py-2">
        Create New Document
      </button>
    </div>
  );
};

export default Dashboard;
