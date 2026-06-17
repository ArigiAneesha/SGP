import React, { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import "./Career.css";

// ✅ HERO IMAGE
import heroImg from "../assets/work.webp";

const Career = () => {

  const [jobs, setJobs] = useState([]);
  const [file, setFile] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load jobs ❌");
    }
  };

  const applyJob = async () => {

    // ✅ LOGIN CHECK
    const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Please login before applying ⚠️");
      return;
    }

    if (!file) {
      toast.warning("Please upload your resume");
      return;
    }

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      await API.post(`/jobs/${selectedJob}/apply`, formData);

      toast.success("Application submitted successfully 🎉");

      setFile(null);
      setSelectedJob(null);

    } catch (error) {
      console.error(error);

      if (error.response?.status === 401) {
        toast.warning("Please login first ⚠️");
        return;
      }

      toast.error("Application failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <div
        className="career-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>Careers</h1>
          <p>Home » Careers</p>
        </div>
      </div>

      <div className="career-page">

        <h1 className="career-title">Join Our Team</h1>
        <p className="career-subtitle">
          Explore exciting opportunities at SGP
        </p>

        <div className="jobs-container">
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>

              <h3>{job.title}</h3>

              <p className="job-location">
                📍 {job.location}
              </p>

              <p className="job-description">
                {job.description}
              </p>

              <button
                className="apply-btn"
                onClick={() => setSelectedJob(job.id)}
              >
                Apply Now
              </button>

            </div>
          ))}
        </div>

        {/* 🔷 APPLY MODAL */}
        {selectedJob && (
          <div className="apply-modal">

            <div className="modal-content">

              <h2>Apply for this job</h2>

              <input
                type="file"
                accept="application/pdf"
                onChange={(e) => setFile(e.target.files[0])}
              />

              {file && <p className="file-name">{file.name}</p>}

              <div className="modal-buttons">

                <button
                  className="submit-btn"
                  onClick={applyJob}
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>

                <button
                  className="cancel-btn"
                  onClick={() => {
                    setSelectedJob(null);
                    setFile(null);
                  }}
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>
        )}

      </div>
    </>
  );
};

export default Career;