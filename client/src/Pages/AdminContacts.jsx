import React, { useEffect, useState } from "react";
import API from "../services/api";
import "./AdminContacts.css";

const AdminContacts = () => {

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await API.get("/admin/contacts");
      setContacts(res.data);
    } catch (error) {
      console.error("Error fetching contacts", error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/contact/admin/${id}/status?status=${status}`);
      fetchContacts();
    } catch (error) {
      console.error(error);
      alert("Status update failed");
    }
  };

  return (

    <div className="contacts-page">

      {/* 🔥 HEADER */}
      <div className="page-header">
        <h1>Service Requests</h1>
        <p>Manage customer service inquiries</p>
      </div>

      {/* 🔥 TABLE CARD */}
      <div className="table-card">

        <table className="contacts-table">

          <thead>
            <tr>
              <th>Service</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Message</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>

            {contacts.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">
                  No Requests Found
                </td>
              </tr>
            ) : (

              contacts.map((c) => (

                <tr key={c.id}>

                  <td>
                    <span className="service-badge">
                      {c.serviceType}
                    </span>
                  </td>

                  <td>{c.companyName}</td>

                  <td className="email">{c.officialEmail}</td>

                  <td>{c.phoneNumber}</td>

                  <td className="address">{c.officeAddress}</td>

                  <td className="message">{c.message}</td>

                  <td>
                    <span className={`status ${c.status.toLowerCase()}`}>
                      {c.status}
                    </span>
                  </td>

                  <td>
                    <select
                      value={c.status}
                      onChange={(e) => updateStatus(c.id, e.target.value)}
                      className="status-dropdown"
                    >
                      <option value="PENDING">Pending</option>
                      <option value="IN_PROGRESS">In Progress</option>
                      <option value="COMPLETED">Completed</option>
                      <option value="REJECTED">Rejected</option>
                    </select>
                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>

  );
};

export default AdminContacts;