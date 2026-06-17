import { useState } from "react";
import API from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

// ✅ IMPORT IMAGE FROM ASSETS
import heroImg from "../assets/login1.webp";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("/auth/login", { email, password });

      const token = res.data.data.token;
      const role = res.data.data.role;
      const userEmail = res.data.data.email;

      // ✅ STORE DATA
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("email", userEmail);

      toast.success("Login successful 🚀");

      setTimeout(() => {
        if (role === "ROLE_ADMIN") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      }, 800);

    } catch (err) {
      toast.error("Invalid email or password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <div
        className="login-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Login</h1>
          <p>Home » Login</p>
        </div>
      </div>

      {/* 🔷 LOGIN SECTION */}
      <div className="login-container">
        <div className="login-card">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Login"}
            </button>
          </form>

          <p className="auth-link">
            Don't have an account? <Link to="/register">Register</Link>
          </p>

          <p className="auth-link">
            <Link to="/forgot-password">Forgot Password?</Link>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;