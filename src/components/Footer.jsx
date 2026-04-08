import Link from "next/link";

export default function FooterComponent() {
  return (
    <footer style={{ backgroundColor: "#2d2d2d", color: "#ccc", marginTop: "60px" }}>
      <div className="container py-5">
        <div className="row">

          {/* Brand */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3" style={{ color: "#fff" }}>
              🛍️ <span style={{ color: "#6c63ff" }}>ShopZone</span>
            </h5>
            <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
              Your one-stop shop for everything you need. Quality products, fast delivery.
            </p>
            {/* Social icons */}
            <div className="d-flex gap-3 mt-3">
              {[
                { icon: "fab fa-facebook-f", href: "#" },
                { icon: "fab fa-instagram",  href: "#" },
                { icon: "fab fa-twitter",    href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "50%",
                    backgroundColor: "#3d3d3d",
                    color: "#ccc",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6c63ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#3d3d3d")}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>Quick Links</h6>
            <ul className="list-unstyled">
              {[
                { icon: "fas fa-house",           label: "Home",     href: "/" },
                { icon: "fas fa-box",             label: "Products", href: "/products" },
                { icon: "fas fa-circle-info",     label: "About",    href: "/about" },
                { icon: "fas fa-cart-shopping",   label: "Cart",     href: "/cart" },
              ].map((item, i) => (
                <li key={i} className="mb-2">
                  <Link href={item.href} style={{ color: "#aaa", textDecoration: "none", fontSize: "14px" }}>
                    <i className={`${item.icon} me-2`} style={{ color: "#6c63ff" }}></i>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h6 className="fw-bold mb-3" style={{ color: "#fff" }}>Contact Us</h6>
            {[
              { icon: "fas fa-envelope",      text: "support@shopzone.com" },
              { icon: "fas fa-phone",         text: "+20 100 000 0000" },
              { icon: "fas fa-location-dot",  text: "Cairo, Egypt" },
            ].map((item, i) => (
              <p key={i} style={{ fontSize: "14px" }} className="d-flex align-items-center gap-2">
                <i className={item.icon} style={{ color: "#6c63ff", width: "16px" }}></i>
                {item.text}
              </p>
            ))}
          </div>

        </div>

        <hr style={{ borderColor: "#444" }} />
        <p className="text-center mb-0" style={{ fontSize: "13px", color: "#888" }}>
          © {new Date().getFullYear()} ShopZone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}