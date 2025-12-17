import React from 'react';

const PostItem = (props) => {
  const { title, description } = props.post;
  return (
    <article className="post-item">
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default PostItem;
