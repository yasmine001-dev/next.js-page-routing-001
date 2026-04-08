import React from 'react';
import Link from 'next/link';

const PostsPage = ({ posts }) => {
  return (
    <div className="container mt-4">
      <h1>Posts</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <Link href={`/posts/${post.id}`}>
              {post.title}  {/* نضع النص مباشرة داخل Link */}
            </Link>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/posts');
    if (!res.ok) return { props: { posts: [] } };
    const data = await res.json();
    return { props: { posts: data.posts  }, revalidate: 5 //ms
    //first time from cach then after 5ms will get from the server
};
   
}