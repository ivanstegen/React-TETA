import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">Blog App</div>
        <nav className="navigation">
          <a href="#home">Начало</a>
          <a href="#posts">Статии</a>
          <a href="#about">За нас</a>
          <a href="#contact">Контакти</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
