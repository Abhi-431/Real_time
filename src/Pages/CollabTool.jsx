
    import { useNavigate } from "react-router-dom";

const CollabTool = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      <nav className="w-100 bg-white shadow-md py-4 px-5 d-flex justify-content-between align-items-center">
        <h1 className="h3 font-weight-bold">CollabTool</h1>
        <div>
          <button className="btn btn-link text-dark mr-4" onClick={() => navigate('/login')}>Login</button>
          <button className="btn btn-link text-dark" onClick={() => navigate('/register')}>Register</button>
        </div>
      </nav>
      <div className="bg-white p-5 rounded-lg shadow-lg max-w-2xl text-center mt-5">
        <h2 className="h4 font-weight-semibold mb-4">Welcome to CollabTool</h2>
        <p className="text-muted mb-4">
          CollabTool is your go-to platform for seamless real-time collaboration. Work together on documents, share ideas, and communicate effortlessly with your team.
        </p>
        <p className="text-muted mb-4">
          Whether you're working on a team project or just need to organize your thoughts, CollabTool offers all the features you need to stay productive.
        </p>
        <div className="d-flex justify-content-center gap-4">
          <button className="btn btn-primary px-5 py-2 rounded-lg text-white" onClick={() => navigate('/register')}>
            Register
          </button>
          <button className="btn btn-secondary px-5 py-2 rounded-lg text-white" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollabTool;
