import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import "./AdminLayout.css";

import {
FaTachometerAlt,
FaBriefcase,
FaFileAlt,
FaEnvelope,
FaBell,
FaUserCircle
} from "react-icons/fa";

function AdminLayout() {

const navigate = useNavigate();
const location = useLocation();

const logout = () => {
localStorage.removeItem("token");
localStorage.removeItem("role");
navigate("/login");
};

return (

<div className="admin-layout">

{/* SIDEBAR */}

<div className="sidebar">

<h2 className="logo">SGP Admin</h2>

<nav>

<Link
to="dashboard"
className={location.pathname.includes("dashboard") ? "active" : ""}
>
<FaTachometerAlt className="icon"/> Dashboard
</Link>

<Link
to="jobs"
className={location.pathname.includes("jobs") ? "active" : ""}
>
<FaBriefcase className="icon"/> Manage Jobs
</Link>

<Link
to="applications"
className={location.pathname.includes("applications") ? "active" : ""}
>
<FaFileAlt className="icon"/> Applications
</Link>

<Link
to="contacts"
className={location.pathname.includes("contacts") ? "active" : ""}
>
<FaEnvelope className="icon"/> Contact Requests
</Link>

</nav>

<button className="logout-btn" onClick={logout}>
Logout
</button>

</div>

{/* MAIN AREA */}

<div className="main-area">

{/* TOPBAR */}

<div className="topbar">

<h3>Admin Dashboard</h3>

<div className="topbar-right">

<FaBell className="top-icon"/>

<div className="admin-profile">

<FaUserCircle className="profile-icon"/>
<span>Admin</span>

</div>

</div>

</div>

{/* CONTENT */}

<div className="content">

<Outlet />

</div>

</div>

</div>

);

}

export default AdminLayout;