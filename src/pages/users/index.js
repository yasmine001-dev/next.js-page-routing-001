import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center" style={{ minHeight: "50vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div className="spinner-border mb-3" style={{ color: "#6c63ff" }} role="status"></div>
        <p className="text-muted">Loading users...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mt-5 text-center">
        <p className="text-danger">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold mb-1">Users</h1>
        
      </div>

      <div className="row g-4">
        {users.map((user) => (
          <div className="col-sm-6 col-lg-4" key={user.id}>
            <div
              className="bg-white rounded-4 shadow-sm p-4 h-100"
              style={{ transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >
              <div className="d-flex align-items-center gap-3 mb-3">
               
                <div>
                  <div className="fw-bold">{user.firstName} {user.lastName}</div>
                  <div className="text-muted" style={{ fontSize: 13 }}>@{user.username}</div>
                </div>
              </div>

              <div style={{ fontSize: 13 }} className="text-muted">
                <div className="mb-1">
                  <i className="fas fa-envelope me-2" style={{ color: "#6c63ff", width: 14 }}></i>
                  {user.email}
                </div>
                <div className="mb-1">
                  <i className="fas fa-phone me-2" style={{ color: "#6c63ff", width: 14 }}></i>
                  {user.phone}
                </div>
                <div>
                  <i className="fas fa-location-dot me-2" style={{ color: "#6c63ff", width: 14 }}></i>
                  {user.address?.city}, {user.address?.country}
                </div>
              </div>

              <div className="mt-3 pt-3 border-top">
                <Link
                  href={`/users/${user.id}`}
                  className="btn btn-sm w-100"
                  style={{ backgroundColor: "#f0eeff", color: "#6c63ff", borderRadius: 8, fontWeight: 600 }}
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}