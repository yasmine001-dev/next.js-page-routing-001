import React from 'react';

const CommentsPage = ({ comments }) => {
  return (
    <div className="container mt-4">
      <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
            <>
          <li key={comment.id} style={{ marginBottom: '15px' }}>
            <p>{comment.body}</p>
            <p>
              <strong>User:</strong> {comment.user.username} 
            </p>
          </li>
          </>
        ))}
        
      </ul>
    </div>
  );
};

export default CommentsPage;

export async function getServerSideProps() {
  
    const res = await fetch('https://dummyjson.com/comments');
   
    const data = await res.json();
    return { props: { comments: data.comments } };
  
}