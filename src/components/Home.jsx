import Link from "next/link";

export default function HomeComponent({ products = [] }) {
  return (
    <main>

      {/* ===== HERO ===== */}
      <section style={{ background: "linear-gradient(135deg, #6c63ff 0%, #48cfad 100%)", color: "#fff", padding: "80px 0" }}>
        <div className="container text-center">
          <p className="mb-2" style={{ fontSize: "14px", letterSpacing: "2px", opacity: 0.85 }}>
            WELCOME TO SHOPZONE
          </p>
          <h1 className="display-4 fw-bold mb-4">
            Find Everything <br /> You Need 🛍️
          </h1>
          <p className="mb-5" style={{ fontSize: "18px", opacity: 0.9, maxWidth: "500px", margin: "0 auto 30px" }}>
            Thousands of products at amazing prices. Shop now and get it delivered fast!
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/products" className="btn btn-light fw-bold px-4 py-3" style={{ borderRadius: "12px", color: "#6c63ff", fontSize: "16px" }}>
              <i className="fas fa-bag-shopping me-2"></i>Shop Now
            </Link>
            <Link href="/about" className="btn fw-bold px-4 py-3" style={{ borderRadius: "12px", color: "#fff", border: "2px solid #fff", fontSize: "16px" }}>
              <i className="fas fa-circle-info me-2"></i>Learn More
            </Link>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#f8f9fa", padding: "50px 0" }}>
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { icon: "fas fa-truck-fast",      title: "Free Delivery",   text: "On orders over $50" },
              { icon: "fas fa-shield-halved",   title: "Secure Payment",  text: "100% safe & protected" },
              { icon: "fas fa-rotate-left",     title: "Easy Returns",    text: "30-day return policy" },
              { icon: "fas fa-headset",         title: "24/7 Support",    text: "Always here to help" },
            ].map((item, i) => (
              <div className="col-6 col-md-3" key={i}>
                <div
                  className="p-4 rounded-4 bg-white shadow-sm h-100"
                  style={{ transition: "transform 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-4px)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                >
                  <div
                    style={{ width: "56px", height: "56px", borderRadius: "16px", backgroundColor: "#f0eeff", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <i className={item.icon} style={{ fontSize: "22px", color: "#6c63ff" }}></i>
                  </div>
                  <h6 className="fw-bold mb-1">{item.title}</h6>
                  <p className="text-muted mb-0" style={{ fontSize: "13px" }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     

    </main>
  );
}