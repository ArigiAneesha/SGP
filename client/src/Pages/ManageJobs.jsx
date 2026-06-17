import { useEffect, useState } from "react";
import API from "../services/api";
import { toast } from "react-toastify";
import "./ManageJobs.css";

function ManageJobs(){

  const [jobs, setJobs] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    fetchJobs();
  },[]);

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      toast.error("Failed to load jobs ❌");
    }
  };

  const createJob = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await API.post("/admin/jobs", {
        title,
        description,
        location,
        postedBy:"admin@example.com"
      });

      toast.success("Job created successfully 🎉");

      setTitle("");
      setDescription("");
      setLocation("");

      fetchJobs();

    } catch (error) {
      toast.error("Failed to create job ❌");
    } finally {
      setLoading(false);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/admin/jobs/${id}`);
      toast.success("Job deleted 🗑️");
      fetchJobs();
    } catch (error) {
      toast.error("Failed to delete job ❌");
    }
  };

  return (
    <div className="manage-jobs-page">

      {/* 🔥 HEADER */}
      <div className="page-header">
        <h1>Manage Jobs</h1>
        <p>Create and manage job listings</p>
      </div>

      {/* 🔥 FORM CARD */}
      <div className="form-card">

        <form className="job-form" onSubmit={createJob}>

          <input
            type="text"
            placeholder="Job Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Create Job"}
          </button>

        </form>

      </div>

      {/* 🔥 TABLE */}
      <div className="table-card">

        <table className="jobs-table">

          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {jobs.length === 0 ? (
              <tr>
                <td colSpan="4" className="no-data">
                  No Jobs Found
                </td>
              </tr>
            ) : (

              jobs.map((job)=>(

                <tr key={job.id}>

                  <td className="job-title">{job.title}</td>

                  <td className="job-desc">{job.description}</td>

                  <td>
                    <span className="location-badge">
                      {job.location}
                    </span>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={()=>deleteJob(job.id)}
                    >
                      Delete
                    </button>
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

export default ManageJobs;