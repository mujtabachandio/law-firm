import React from 'react';

export default function CommentList({ comments = [] }) {
  return (
    <ol className="comment-list cs_pb_96 cs_pl_0">
      {comments.map((item, index) => (
        <li className="comment" key={index}>
          <div className="comment-body">
            <div className="comment-author vcard">
              <div className="avatar-icon" style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#f8f9fa',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #1B365D',
                marginRight: '15px'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#1B365D' }}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <a href="/" className="url">
                {item.name}
              </a>
            </div>
            <p>{item.comment}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
