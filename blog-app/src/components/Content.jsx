import React from 'react';
import PostList from './PostList';

const Content = (props) => {
  return (
    <section className="content">
      <h2>Последни статии</h2>
      <PostList posts={props.posts} />
    </section>
  );
};

export default Content;
