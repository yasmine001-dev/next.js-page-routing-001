import Link from "next/link";

export default function CommentPage({ comment }) {
  if (!comment) return null;

  return (
    <div className="container mt-5" style={{ maxWidth: "680px" }}>
      <Link
        href="/comments"
        className="d-inline-flex align-items-center gap-2 mb-4"
        style={{ color: "#6c63ff", textDecoration: "none", fontWeight: 600 }}
      >
        <i className="fas fa-arrow-left"></i> Back to Comments
      </Link>

      <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">
        {/* User avatar */}
        <div className="d-flex align-items-center gap-3 mb-4">
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6c63ff, #48cfad)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            {comment.user?.username?.[0]?.toUpperCase() ?? "?"}
          </div>
          <div>
            <div className="fw-bold">{comment.user?.username}</div>
            <div className="text-muted" style={{ fontSize: 13 }}>
              Comment #{comment.id}
            </div>
          </div>
        </div>

        <p style={{ lineHeight: 1.9, fontSize: 16 }}>{comment.body}</p>

        <hr className="my-3" />
        <div className="d-flex gap-3 text-muted" style={{ fontSize: 13 }}>
          <span>
            <i className="fas fa-thumbs-up me-1" style={{ color: "#6c63ff" }}></i>
            {comment.likes ?? 0} Likes
          </span>
          <Link
            href={`/posts/${comment.postId}`}
            style={{ color: "#6c63ff", textDecoration: "none" }}
          >
            <i className="fas fa-file-alt me-1"></i>View Post #{comment.postId}
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://dummyjson.com/comments/${params.id}`);
  if (!res.ok) return { notFound: true };
  const comment = await res.json();
  return { props: { comment } };
}