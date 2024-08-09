import React from 'react';
import Search from '../Search/Search';
import Navigation from '../Navigation/Navigation';

export default function Header({ getInfo }) {
  return (
    <div className="header">
      <Navigation />
      <div className="header__info">
        <h1 className="header__title">Mundo actual</h1>
        <p className="header__slogan">
          Inicia tu día informado con noticias globales.
        </p>
      </div>
      <Search getinfo={getInfo} />
    </div>
  );
}
