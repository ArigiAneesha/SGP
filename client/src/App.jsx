import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home";
import Career from "./Pages/Career";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import ElectricalSkyline from "./components/ElectricalSkyline";
import BottomNavbar from "./components/BottomNavbar";

import AdminLayout from "./Pages/AdminLayout";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminJobs from "./Pages/ManageJobs";
import AdminContacts from "./Pages/AdminContacts";
import AdminApplications from "./Pages/AdminApplications";

import AdminRoute from "./components/AdminRoute";

const App = () => {

  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      <Preloader />

      {/* 🔥 TOAST CONTAINER */}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      {!isAdminPage && <Navbar />}

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/career" element={<Career />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="jobs" element={<AdminJobs />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="applications" element={<AdminApplications />} />
        </Route>

      </Routes>

      {!isAdminPage && <ElectricalSkyline />}
      {!isAdminPage && <Footer />}
      {!isAdminPage && <BottomNavbar />}

    </>
  );
};

export default App;