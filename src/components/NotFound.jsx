import Link from "next/link";
 import { useRouter } from 'next/router'; //=> the old (Deprecated)
const NotFound=()=> {
  const router = useRouter();
    const back =()=>{
        //? operations 
        router.replace("/")
}
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center text-center"
      style={{ minHeight: "70vh", padding: "40px 20px" }}
    >
      <h1
        className="fw-bold"
        style={{
          fontSize: "120px",
          lineHeight: 1,
          background: "linear-gradient(135deg, #6c63ff, #48cfad)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        404
      </h1>

      <div
        className="my-4"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "24px",
          backgroundColor: "#f0eeff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <i className="fas fa-map-location-dot" style={{ fontSize: "36px", color: "#6c63ff" }}></i>
      </div>

      <h2 className="fw-bold mb-2" style={{ color: "#2d2d2d" }}>
        Page Not Found
      </h2>
      <p className="text-muted mb-4" style={{ maxWidth: "380px", lineHeight: "1.7" }}>
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
{/* `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. */}
     <button className='btn btn-dark w-100' onClick={back}>Back To Home</button>
      <Link
        href="/"
        className="btn px-5 py-3"
        style={{
          backgroundColor: "#6c63ff",
          color: "#fff",
          borderRadius: "12px",
          fontSize: "15px",
          textDecoration: "none",
        }}
      >
        <i className="fas fa-house me-2"></i>Back to Home
      </Link>
    </div>
  );
}
export default NotFound;