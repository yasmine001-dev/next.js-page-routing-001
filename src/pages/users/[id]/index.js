import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function UserDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/users/${id}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="container mt-5 text-center" style={{ minHeight: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="spinner-border" style={{ color: "#6c63ff" }} role="status"></div>
      </div>
    );
  }

  if (!user) return <div className="container mt-5"><p>User not found.</p></div>;

  return (
    <div className="container mt-5 mb-5" style={{ maxWidth: 720 }}>
      <Link href="/users" className="d-inline-flex align-items-center gap-2 mb-4" style={{ color: "#6c63ff", textDecoration: "none", fontWeight: 600 }}>
        <i className="fas fa-arrow-left"></i> Back to Users
      </Link>

      <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
        {/* Avatar + name */}
        <div className="d-flex align-items-center gap-4 mb-4">
         
          <div>
            <h2 className="fw-bold mb-1">{user.firstName} {user.lastName}</h2>
            <span className="badge" style={{ backgroundColor: "#f0eeff", color: "#6c63ff" }}>@{user.username}</span>
          </div>
        </div>

        <div className="row g-3">
          {[
            { icon: "fas fa-envelope",      label: "Email",    value: user.email },
            { icon: "fas fa-phone",         label: "Phone",    value: user.phone },
            { icon: "fas fa-birthday-cake", label: "Age",      value: user.age },
            { icon: "fas fa-briefcase",     label: "Company",  value: user.company?.name },
            { icon: "fas fa-location-dot",  label: "City",     value: `${user.address?.city}, ${user.address?.country}` },
            { icon: "fas fa-university",    label: "Bank",     value: user.bank?.cardType },
          ].map((item, i) => (
            <div className="col-sm-6" key={i}>
              <div className="d-flex align-items-start gap-2">
                <i className={`${item.icon} mt-1`} style={{ color: "#6c63ff", width: 16, fontSize: 13 }}></i>
                <div>
                  <div className="text-muted" style={{ fontSize: 12 }}>{item.label}</div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{item.value || "—"}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}