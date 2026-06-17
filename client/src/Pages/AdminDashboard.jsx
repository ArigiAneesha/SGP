import { useEffect, useState } from "react";
import API from "../services/api";
import "./AdminDashboard.css";

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut, Line } from "react-chartjs-2";
import { FaUsers, FaBriefcase, FaFileAlt, FaEnvelope } from "react-icons/fa";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function AdminDashboard(){

  const [stats,setStats]=useState({
    totalUsers:0,
    totalContacts:0,
    totalJobs:0,
    totalApplications:0,
    pendingContacts:0,
    inProgressContacts:0,
    completedContacts:0,
    rejectedContacts:0
  });

  useEffect(()=>{
    fetchDashboard();
  },[]);

  const fetchDashboard=async()=>{
    try{
      const res=await API.get("/admin/dashboard");
      setStats(res.data);
    }catch(err){
      console.error(err);
    }
  };

  const donutData={
    labels:["Pending","In Progress","Completed","Rejected"],
    datasets:[
      {
        data:[
          stats.pendingContacts,
          stats.inProgressContacts,
          stats.completedContacts,
          stats.rejectedContacts
        ],
        backgroundColor:[
          "#facc15",
          "#3b82f6",
          "#22c55e",
          "#ef4444"
        ],
        borderWidth:0
      }
    ]
  };

  const donutOptions={
    cutout:"70%",
    plugins:{
      legend:{display:false}
    }
  };

  const lineData={
    labels:["Users","Jobs","Applications","Contacts"],
    datasets:[
      {
        label:"Activity",
        data:[
          stats.totalUsers,
          stats.totalJobs,
          stats.totalApplications,
          stats.totalContacts
        ],
        borderColor:"#6366f1",
        backgroundColor:"#6366f1",
        tension:0.4
      }
    ]
  };

  return(

    <div className="dashboard">

      {/* 🔥 TOP CARDS */}
      <div className="top-cards">

        <div className="card gradient-blue">
          <FaUsers className="card-icon"/>
          <p>Total Users</p>
          <h2>{stats.totalUsers}</h2>
        </div>

        <div className="card gradient-purple">
          <FaBriefcase className="card-icon"/>
          <p>Total Jobs</p>
          <h2>{stats.totalJobs}</h2>
        </div>

        <div className="card gradient-green">
          <FaFileAlt className="card-icon"/>
          <p>Applications</p>
          <h2>{stats.totalApplications}</h2>
        </div>

        <div className="card gradient-red">
          <FaEnvelope className="card-icon"/>
          <p>Contacts</p>
          <h2>{stats.totalContacts}</h2>
        </div>

      </div>

      {/* 🔥 CHARTS */}
      <div className="chart-grid">

        <div className="donut-card">
          <h3>Contact Allocation</h3>

          <div className="donut-wrapper">
            <Doughnut data={donutData} options={donutOptions}/>
            <div className="center-text">
              {stats.totalContacts}
              <p>Requests</p>
            </div>
          </div>
        </div>

        <div className="line-card">
          <h3>Platform Performance</h3>
          <Line data={lineData}/>
        </div>

      </div>

      {/* 🔥 TABLE */}
      <div className="table-card">

        <h3>Platform Overview</h3>

        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>Total Users</td><td>{stats.totalUsers}</td></tr>
            <tr><td>Total Jobs</td><td>{stats.totalJobs}</td></tr>
            <tr><td>Total Applications</td><td>{stats.totalApplications}</td></tr>
            <tr><td>Total Contacts</td><td>{stats.totalContacts}</td></tr>
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminDashboard;