 // Home.jsx
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Add real authentication here if needed
    navigate('/dashboard');
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <div className="home-content">
          <h2 className="title">Sign In</h2>

          <form className="login-form" onSubmit={handleSignIn}>
            <input type="text" placeholder="Email or mobile number" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="sign-in-btn">Sign In</button>
          </form>

          <div className="divider">OR</div>

          <button className="code-btn">Use a sign-in code</button>
          <button className="google-btn">Sign in with Google</button>

          <a href="#" className="forgot-link">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
