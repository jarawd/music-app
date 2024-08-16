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
        <a
          href="https://github.com/jarawd"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={github}
            alt="github icon"
            className="footer__social"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/orlando-jara-976288271/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={linkedin}
            alt="linkedin icon"
            className="footer__social"
          />
        </a>
      </div>
    </div>
  );
}
