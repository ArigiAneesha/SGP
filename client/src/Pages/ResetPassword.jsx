import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/reset-password", {
        email,
        otp,
        newPassword
      });

      alert("Password reset successful");

    } catch (error) {

      alert("Invalid OTP or reset failed");

    }

  };

  return (

    <div className="reset-container">

      <div className="reset-card">

        <h2>Reset Password</h2>

        <form onSubmit={handleReset}>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e)=>setOtp(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e)=>setNewPassword(e.target.value)}
            required
          />

          <button type="submit">
            Reset Password
          </button>

        </form>

        <p className="auth-link">
          Back to <Link to="/login">Login</Link>
        </p>

      </div>

    </div>

  );
}

export default ResetPassword;