
import Link from "next/link";

export default function AboutPage() {
  const teamMembers = [
    { name: "Sara Ahmed",   role: "CEO & Founder",      icon: "fas fa-user-tie" },
    { name: "Omar Hassan",  role: "Lead Developer",     icon: "fas fa-code" },
    { name: "Nour Khaled",  role: "UI/UX Designer",     icon: "fas fa-pen-ruler" },
    { name: "Ali Mohamed",  role: "Product Manager",    icon: "fas fa-list-check" },
  ];

  const stats = [
    { icon: "fas fa-users",          value: "50K+",  label: "Happy Customers" },
    { icon: "fas fa-box-open",       value: "10K+",  label: "Products" },
    { icon: "fas fa-truck-fast",     value: "99%",   label: "On-time Delivery" },
    { icon: "fas fa-star",           value: "4.9",   label: "Average Rating" },
  ];

  const values = [
    { icon: "fas fa-heart",          title: "Customer First",  text: "Everything we do is focused on making your shopping experience the best it can be." },
    { icon: "fas fa-shield-halved",  title: "Trust & Safety",  text: "Your data and payments are always protected with the highest security standards." },
    { icon: "fas fa-leaf",           title: "Sustainability",  text: "We care about the planet and work with eco-friendly suppliers whenever possible." },
    { icon: "fas fa-bolt",           title: "Fast & Reliable", text: "From order to door, we make sure everything reaches you quickly and in perfect condition." },
  ];

  return (
    <>

      {/* ===== HERO ===== */}
      <section style={{ background: "linear-gradient(135deg, #6c63ff 0%, #48cfad 100%)", color: "#fff", padding: "80px 0" }}>
        <div className="container text-center">
          <div
            style={{ width: "72px", height: "72px", borderRadius: "20px", backgroundColor: "rgba(255,255,255,0.2)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <i className="fas fa-store" style={{ fontSize: "32px" }}></i>
          </div>
          <h1 className="display-4 fw-bold mb-3">About ShopZone</h1>
          <p style={{ fontSize: "18px", opacity: 0.9, maxWidth: "560px", margin: "0 auto" }}>
            We started with a simple mission: make online shopping easy, affordable, and enjoyable for everyone.
          </p>
        </div>
      </section>
      {/* ===== OUR VALUES ===== */}

    <section style={{ backgroundColor: "#f8f9fa", padding: "70px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">What We Stand For</h2>
            <p className="text-muted">The values that guide everything we do</p>
          </div>
          <div className="row g-4">
            {values.map((v, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <div
                  className="bg-white rounded-4 shadow-sm p-4 h-100"
                  style={{ transition: "transform 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div
                    style={{ width: "52px", height: "52px", borderRadius: "14px", backgroundColor: "#f0eeff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}
                  >
                    <i className={v.icon} style={{ fontSize: "20px", color: "#6c63ff" }}></i>
                  </div>
                  <h6 className="fw-bold mb-2">{v.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "13px", lineHeight: "1.7" }}>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-6">
              {/* Placeholder image */}
              <div
                className="rounded-4 d-flex align-items-center justify-content-center"
                style={{ height: "320px", background: "linear-gradient(135deg, #f0eeff, #e0fbf4)" }}
              >
                <i className="fas fa-store" style={{ fontSize: "80px", color: "#6c63ff", opacity: 0.5 }}></i>
              </div>
            </div>
            <div className="col-md-6">
              <span className="badge mb-3 px-3 py-2" style={{ backgroundColor: "#f0eeff", color: "#6c63ff", fontSize: "13px" }}>
                <i className="fas fa-book-open me-2"></i>Our Story
              </span>
              <h2 className="fw-bold mb-3">Built with passion, <br /> grown with trust</h2>
              <p className="text-muted mb-3" style={{ lineHeight: "1.9" }}>
                ShopZone was founded in 2020 by a small team of people who believed that online shopping should be simple and fun — not complicated and stressful.
              </p>
              <p className="text-muted mb-4" style={{ lineHeight: "1.9" }}>
                Today, we serve thousands of customers across Egypt and the Arab world, offering a wide selection of products with fast delivery and real customer support.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-circle-check" style={{ color: "#6c63ff" }}></i>
                  <span style={{ fontSize: "14px" }}>No hidden fees</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-circle-check" style={{ color: "#6c63ff" }}></i>
                  <span style={{ fontSize: "14px" }}>Real customer support</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fas fa-circle-check" style={{ color: "#6c63ff" }}></i>
                  <span style={{ fontSize: "14px" }}>Easy returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* ===== TEAM ===== */}
      {/* <section style={{ padding: "70px 0" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-2">Meet the Team</h2>
            <p className="text-muted">The people behind ShopZone</p>
          </div>
          <div className="row g-4 justify-content-center">
            {teamMembers.map((member, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div className="text-center">
                  <div
                    className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "90px", height: "90px", background: "linear-gradient(135deg, #6c63ff, #48cfad)" }}
                  >
                    <i className={member.icon} style={{ fontSize: "32px", color: "#fff" }}></i>
                  </div>
                  <h6 className="fw-bold mb-1">{member.name}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "13px" }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===== CTA ===== */}
      <section style={{ background: "linear-gradient(135deg, #6c63ff, #48cfad)", padding: "60px 0" }}>
        <div className="container text-center text-white">
          <h2 className="fw-bold mb-3">Ready to start shopping?</h2>
          <p style={{ opacity: 0.9, marginBottom: "30px" }}>Join thousands of happy customers today.</p>
          <Link href="/products" className="btn btn-light fw-bold px-5 py-3" style={{ borderRadius: "12px", color: "#6c63ff", fontSize: "16px" }}>
            <i className="fas fa-bag-shopping me-2"></i>Browse Products
          </Link>
        </div>
      </section>

    </>
  );
}