import React from 'react';
import menu from '../../images/menu.svg';
import close from '../../images/close.svg';
import { useState } from 'react';

export default function Navigation(props) {
  const [menuActive, setMenuActive] = useState(false);

  function dropMenu() {
    setMenuActive(!menuActive);
  }
  return (
    <div className="navigation">
      <p className="navigation__site-name">News Explorer</p>
      <nav className={`navigation__menu${menuActive ? ' active' : ''}`}>
        <a
          href="#top"
          className="navigation__menu-link"
        >
          Inicio
        </a>
        <a
          href="#main"
          className="navigation__menu-link"
        >
          Noticias
        </a>
        <a
          href="#about"
          className="navigation__menu-link"
        >
          Acerca de
        </a>
      </nav>
      <img
        src={menuActive ? close : menu}
        alt="menu icon"
        className="navigation__menu-icon"
        onClick={dropMenu}
      />
    </div>
  );
}
