import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Register.css";

// ✅ IMPORT IMAGE FROM ASSETS
import heroImg from "../assets/home4.webp"; // you can change to register image if needed

function Register() {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await API.post("/auth/register", {
        fullName,
        email,
        password
      });

      toast.success("Registration successful 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (error) {
      toast.error("Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <div
        className="register-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Register</h1>
          <p>Home » Register</p>
        </div>
      </div>

      {/* 🔷 REGISTER FORM */}
      <div className="register-container">
        <div className="register-card">

          <h2>Create Account</h2>

          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e)=>setFullName(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Register"}
            </button>
          </form>

          <p className="auth-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Register;