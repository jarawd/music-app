import React from 'react';
import github from '../../images/github.svg';
import linkedin from '../../images/linkedin.svg';

export default function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">© 2021 Supersite | Jesus Jara</p>
      <div className="footer__contact">
        <a
          href="#top"
          className="footer__top"
        >
          Inicio
        </a>
        <img
          src={github}
          alt="github icon"
          className="footer__social"
        />
        <img
          src={linkedin}
          alt="linkedin icon"
          className="footer__social"
        />
      </div>
    </div>
  );
}
