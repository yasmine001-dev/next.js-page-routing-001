import Link from "next/link";

export default function PostPage({ post }) {
  if (!post) return null;

  return (
    <div className="container mt-5" style={{ maxWidth: "760px" }}>
      {/* Back */}
      <Link
        href="/posts"
        className="d-inline-flex align-items-center gap-2 mb-4"
        style={{ color: "#6c63ff", textDecoration: "none", fontWeight: 600 }}
      >
        <i className="fas fa-arrow-left"></i> Back to Posts
      </Link>

      {/* Card */}
      <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
        {/* Tags */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          {post.tags?.map((tag) => (
            <span
              key={tag}
              className="badge px-3 py-2"
              style={{ backgroundColor: "#f0eeff", color: "#6c63ff", fontSize: "12px" }}
            >
              #{tag}
            </span>
          ))}
        </div>

        <h1 className="fw-bold mb-4" style={{ fontSize: "28px", lineHeight: 1.4 }}>
          {post.title}
        </h1>

        <p className="text-muted" style={{ lineHeight: 1.9, fontSize: "16px" }}>
          {post.body}
        </p>

        {/* Stats */}
        <hr className="my-4" />
        <div className="d-flex gap-4 flex-wrap">
          <span className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
            <i className="fas fa-thumbs-up" style={{ color: "#6c63ff" }}></i>
            {post.reactions?.likes ?? 0} Likes
          </span>
          <span className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
            <i className="fas fa-thumbs-down" style={{ color: "#e74c3c" }}></i>
            {post.reactions?.dislikes ?? 0} Dislikes
          </span>
          <span className="d-flex align-items-center gap-2 text-muted" style={{ fontSize: "14px" }}>
            <i className="fas fa-eye" style={{ color: "#48cfad" }}></i>
            {post.views ?? 0} Views
          </span>
        </div>
      </div>
    </div>
  );
}

// ISR — نفس strategy الـ /posts
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`);
  if (!res.ok) return { notFound: true };
  const post = await res.json();
  return {
    props: { post },
    revalidate: 5,
  };
}