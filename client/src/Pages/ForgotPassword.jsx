import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";

function ForgotPassword() {

  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/auth/forgot-password", null, {
        params: { email }
      });

      alert("Reset instructions sent to your email");

    } catch (error) {

      alert("Failed to send reset email");

    }
  };

  return (
    <div className="forgot-container">

      <div className="forgot-card">

        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <button type="submit">
            Send Reset Link
          </button>

        </form>

        {/* ADD RESET PASSWORD LINK HERE */}

        <p className="auth-link">
          Go to <Link to="/reset-password">Reset Password</Link>
        </p>

        <p className="auth-link">
          Remember your password? <Link to="/login">Login</Link>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;