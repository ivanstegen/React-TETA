import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3>Категории</h3>
      <ul className="categories-list">
        <li><a href="#react">React</a></li>
        <li><a href="#javascript">JavaScript</a></li>
        <li><a href="#web-dev">Web Development</a></li>
        <li><a href="#tutorials">Tutorials</a></li>
        <li><a href="#tips">Tips & Tricks</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
