import Link from "next/link";
import { useState } from "react";

export default function NabBarComponent() {
  const [cartCount] = useState(0);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top shadow-sm"
      style={{ backgroundColor: "#fff", borderBottom: "2px solid #f0f0f0" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="navbar-brand fw-bold fs-4"
        style={{ color: "#2d2d2d", textDecoration: "none" }}
      >
        🛍️ <span style={{ color: "#6c63ff" }}>ShopZone</span>
      </Link>
      <div className="container">
        {/* Mobile toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link fw-medium"
                style={{ color: "#555" }}
              >
                {/* <i className="fas fa-house me-1"></i>  */}
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/products"
                className="nav-link fw-medium"
                style={{ color: "#555" }}
              >
                {/* <i className="fas fa-box me-1"></i> */}| Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link fw-medium"
                style={{ color: "#555" }}
              >
                {/* <i className="fas fa-circle-info me-1"></i>  */}| About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/posts"
                className="nav-link fw-medium"
                style={{ color: "#555" }}
              >
                {/* <i className="fas fa-circle-info me-1"></i>  */}| posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/comments"
                className="nav-link fw-medium"
                style={{ color: "#555" }}
              >
                {/* <i className="fas fa-circle-info me-1"></i>  */}| comments
              </Link>
            </li>
          </ul>

          {/* Cart button */}
          <div className="d-flex align-items-center">
            <Link
              href="/cart"
              className="btn position-relative"
              style={{
                backgroundColor: "#6c63ff",
                color: "#fff",
                borderRadius: "10px",
                padding: "8px 20px",
              }}
            >
              <i className="fas fa-cart-shopping me-2"></i>Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
