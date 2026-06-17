import { useEffect, useState } from "react";
import API from "../services/api";
import "./AdminApplications.css";

function AdminApplications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await API.get("/admin/job-applications");
      setApplications(response.data);
    } catch (error) {
      console.error("Error fetching applications", error);
    }
  };

  return (
    <div className="applications-page">

      {/* 🔥 HEADER */}
      <div className="page-header">
        <h1>Job Applications</h1>
        <p>Manage and review candidate applications</p>
      </div>

      {/* 🔥 TABLE CARD */}
      <div className="table-card">

        <table className="applications-table">

          <thead>
            <tr>
              <th>Applicant</th>
              <th>Email</th>
              <th>Job Role</th>
              <th>Resume</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>

            {applications.length === 0 ? (

              <tr>
                <td colSpan="5" className="no-data">
                  No Applications Found
                </td>
              </tr>

            ) : (

              applications.map((app) => (

                <tr key={app.id}>

                  <td>
                    <div className="user-info">
                      <div className="avatar">
                        {app.applicantName?.charAt(0)}
                      </div>
                      {app.applicantName}
                    </div>
                  </td>

                  <td>{app.email}</td>

                  <td>
                    <span className="job-badge">
                      {app.job?.title}
                    </span>
                  </td>

                  <td>
                    <a
                      href={`http://localhost:8080/api/admin/resume/${app.resumeFileName}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="resume-btn"
                    >
                      View
                    </a>
                  </td>

                  <td>
                    {app.appliedAt
                      ? new Date(app.appliedAt).toLocaleDateString()
                      : "N/A"}
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default AdminApplications;